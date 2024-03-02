const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const customerController = require('../controllers/customerController');

router.get('/getRestaurant', adminController.getRestaurant);
router.post('/addNewRestaurant', adminController.addNewRestaurant);

router.get('/getCustomers', customerController.getCustomers);
router.get('/getCustomerById/:id', customerController.getCustomerById);
router.get('/getOrdersById/:id', customerController.getOrdersById);
router.get('/getOrderById/:id', customerController.getOrderById);

// router.put("/admin/item/:id", adminController.updateItem);

// router.delete("/admin/item/:id", adminController.deleteItem);

// router.get("/admin/item/search", adminController.searchItem);

module.exports = router;
