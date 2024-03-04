const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// router.get('/getCustomers', customerController.getCustomers);
// router.get('/getCustomerById/:id', customerController.getCustomerById);
// router.get('/getOrdersById/:id', customerController.getOrdersById);
// router.get('/getOrderById/:id', customerController.getOrderById);

router.get('/review/:orderId', customerController.getReviewForOrder);
router.post('/review/:orderId', customerController.postReviewForOrder);

router.get('/cart', customerController.getCart);
router.post('/cart', customerController.addToCart);
router.delete('/cart', customerController.deleteCart);

router.post('/cart/checkout', customerController.checkout);

router.get('/getRestaurant', customerController.getRestaurant);
router.get('/profile/:id', customerController.getProfileById);
router.put('/profile/:id', customerController.updateProfileById);

module.exports = router;
