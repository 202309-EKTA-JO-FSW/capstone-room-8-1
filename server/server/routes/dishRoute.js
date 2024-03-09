const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

// Create a new dish
router.post('/dishes', dishController.createDish);

// Get all dishes
router.get('/dishes', dishController.getAllDishes);

// Get a single dish by ID
router.get('/dishes/:id', dishController.getDishById);

// Update a dish by ID
router.put('/dishes/:id', dishController.updateDishById);

// Delete a dish by ID
router.delete('/dishes/:id', dishController.deleteDishById);

module.exports = router;
