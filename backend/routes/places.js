const express = require('express');
const router = express.Router();
const Place = require('../models/places'); // Update the path accordingly


// Create a new place
router.post('/', async (req, res) => {
    try {
        const place = new Place(req.body);
        await place.save();
        res.status(201).send(place);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update a place by ID
router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'image', 'city']; // Add more fields if needed
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const place = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!place) {
            return res.status(404).send({ message: 'Place not found' });
        }
        res.send(place);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a place by ID
router.delete('/:id', async (req, res) => {
    try {
        const place = await Place.findByIdAndDelete(req.params.id);
        if (!place) {
            return res.status(404).send({ message: 'Place not found' });
        }
        res.send(place);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Fetch all places in a city
router.get('/city/:cityId', async (req, res) => {
    try {
        const places = await Place.find({ city: req.params.cityId }).populate("city");
        res.send(places);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Fetch a single place by ID
router.get('/:id', async (req, res) => {
    try {
        const place = await Place.findById(req.params.id).populate("city");
        if (!place) {
            return res.status(404).send({ message: 'Place not found' });
        }
        res.send(place);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Fetch all places
router.get('/', async (req, res) => {
    try {
        const places = await Place.find().populate("city");
        res.send(places);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
