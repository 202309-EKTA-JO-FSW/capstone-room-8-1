const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dishController');

// Create a new dish
router.post('/', dishController.createDish);

// Get all dishes
router.get('/', dishController.getAllDishes);

// Get a single dish by ID
router.get('/:id', dishController.getDishById);

// Update a dish by ID
router.put('/:id', dishController.updateDishById);

// Delete a dish by ID
router.delete('/:id', dishController.deleteDishById);

module.exports = router;
