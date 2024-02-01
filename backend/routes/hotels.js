const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotels'); // Update the path accordingly

// Create a new hotel
router.post('/', async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        await hotel.save();
        res.status(201).send(hotel);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all hotels
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.send(hotels);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read a single hotel by ID
router.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).send({ message: 'Hotel not found' });
        }
        res.send(hotel);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a hotel by ID
router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'image', 'location', 'price', 'type']; // Add more fields if needed
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!hotel) {
            return res.status(404).send({ message: 'Hotel not found' });
        }
        res.send(hotel);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a hotel by ID
router.delete('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            return res.status(404).send({ message: 'Hotel not found' });
        }
        res.send(hotel);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Get hotels by type
router.get('/type/:type', async (req, res) => {
    try {
        // Assuming you have a 'type' field in your Hotel schema
        const hotels = await Hotel.find({ type: req.params.type });
        res.send(hotels);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get hotels by city
router.get('/city/:city', async (req, res) => {
    try {
        // Assuming you have a 'location' field in your Hotel schema
        const hotels = await Hotel.find({ city: req.params.city });
        res.send(hotels);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
