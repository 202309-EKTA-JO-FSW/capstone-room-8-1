const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/orders', customerController.getOrdersByCustomerId);

router.get('/orders/:id/review', customerController.getReviewForOrder);
router.post('/orders/:id/review', customerController.postReviewForOrder);

router.get('/cart', customerController.getCart);
router.post('/cart', customerController.addToCart);
router.delete('/cart', customerController.deleteCart);

router.post('/cart/checkout', customerController.checkout);

router.get('/profile', customerController.getProfileById);
router.patch('/profile', customerController.updateProfileById);

module.exports = router;
