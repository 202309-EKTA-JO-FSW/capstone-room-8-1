const express = require('express');
const router = express.Router();
const publicController = require('../controllers/publicController');

// const isAuthorized = require('../middleware/isAuthorized');
// const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/restaurants', publicController.getRestaurants);
router.get('/restaurants/:id/dishes', publicController.getDishes);
router.post('/signUp', publicController.signUp);
router.post('/signIn', publicController.signIn);
router.get('/reviews/:restaurantId', publicController.getReviewsByRestaurantId);

module.exports = router;
