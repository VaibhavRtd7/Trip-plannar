const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user'); 

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { username, password, email , role } = req.body;

        // Check if the username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).send({ error: 'Username or email already exists' });
        }

        // Create a new user
        const user = new User({ username, password, email, role });
        await user.save();

        const token = generateAuthToken(user);
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Login and generate JWT
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !(await user.verifyPassword(password))) {
            return res.status(401).send({ error: 'Invalid login credentials' });
        }

        const token = generateAuthToken(user);
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Generate JWT token
const generateAuthToken = (user) => {
    const payload = { userId: user._id, username: user.username, role: user.role };
    const options = { expiresIn: '1h' }; // Set the token expiration time as needed
    const secretKey = 'your-secret-key'; // Replace with your actual secret key

    return jwt.sign(payload, secretKey, options);
};

module.exports = router;
