const express = require('express');
const router = express.Router();
const publicController = require('../controllers/publicController');

router.get('/restaurants', publicController.getRestaurants);
router.get('/restaurants/:id/dishes', publicController.getDishes);
router.post('/signUp', publicController.signUp);
router.post('/signIn', publicController.signIn);
router.get('/signout', publicController.signOut);
router.get('/reviews/:restaurantId', publicController.getReviewsByRestaurantId);

module.exports = router;
