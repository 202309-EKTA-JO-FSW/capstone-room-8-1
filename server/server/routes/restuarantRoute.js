const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.post('/restaurant', restaurantController.createRestaurant);
router.get('/restaurant', restaurantController.getAllRestaurants);
router.get('/restaurant/:id', restaurantController.getRestaurantById);
router.put('/restaurant/:id', restaurantController.updateRestaurantById);
router.delete('/restaurant/:id', restaurantController.deleteRestaurantById);

module.exports = router;
