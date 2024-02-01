const express = require('express');
const City = require('../models/city');

const router = express.Router();

// Create a new city
router.post('/', async (req, res) => {
    try {
        const city = new City(req.body);
        await city.save();
        res.status(201).send(city);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all cities
router.get('/', async (req, res) => {
    try {
        const cities = await City.find();
        res.send(cities);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read a single city by ID
router.get('/:id', async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if (!city) {
            return res.status(404).send({ message: 'City not found' });
        }
        res.send(city);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a city by ID
router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'country', 'image'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!city) {
            return res.status(404).send({ message: 'City not found' });
        }
        res.send(city);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a city by ID
router.delete('/:id', async (req, res) => {
    try {
        const city = await City.findByIdAndDelete(req.params.id);
        if (!city) {
            return res.status(404).send({ message: 'City not found' });
        }
        res.send(city);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
