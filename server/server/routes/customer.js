const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/getRestaurant', customerController.getRestaurant);

router.get('/getCustomers', customerController.getCustomers);
router.get('/getCustomerById/:id', customerController.getCustomerById);
router.get('/getOrdersById/:id', customerController.getOrdersById);
router.get('/getOrderById/:id', customerController.getOrderById);

module.exports = router;
