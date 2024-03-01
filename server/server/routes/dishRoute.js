const express = require('express');
const router = express.Router();
const Dish = require('../models/dishSchema');

// Create a new dish
router.post('/', async (req, res, next) => {
    try {
        const dish = await Dish.create(req.body);
        res.status(201).json(dish);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
});

// Get all dishes
router.get('/', async (req, res, next) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
});

// Get a single dish by ID
router.get('/:id', async (req, res, next) => {
    try {
        const dish = await Dish.findById(req.params.id);
        if (!dish) {
            return res.status(404).json({ error: 'Dish not found' });
        }
        res.json(dish);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
});

// Update a dish by ID
router.put('/:id', async (req, res, next) => {
    try {
        const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!dish) {
            return res.status(404).json({ error: 'Dish not found' });
        }
        res.json(dish);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
});

// Delete a dish by ID
router.delete('/:id', async (req, res, next) => {
    try {
        const dish = await Dish.findByIdAndDelete(req.params.id);
        if (!dish) {
            return res.status(404).json({ error: 'Dish not found' });
        }
        res.json({ message: 'Dish deleted successfully' });
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
});

module.exports = router;
