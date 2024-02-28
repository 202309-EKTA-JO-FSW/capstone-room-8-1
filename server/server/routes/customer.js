const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/getRestaurant', customerController.getRestaurant);

router.get('/customers', customerController.getCustomers);
router.get('/customers/:id', customerController.getCustomerById);
router.get('/orders/:id', customerController.getOrdersById);
router.get('/orders/:id', customerController.getOrderById);

module.exports = router;
