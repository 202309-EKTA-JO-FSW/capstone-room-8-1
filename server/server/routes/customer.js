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

module.exports = router;
