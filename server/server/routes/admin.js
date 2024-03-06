const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/restaurant', adminController.addNewRestaurant);
router.get('/restaurant/:id', adminController.getRestaurantById);
router.put('/restaurant/:id', adminController.updateRestaurantById);
router.delete('/restaurant/:id', adminController.deleteRestaurantById);

router.post('/dish', adminController.createDish);
router.get('/dish/:id', adminController.getDishById);
router.put('/dish/:id', adminController.updateDishById);
router.delete('/dish/:id', adminController.deleteDishById);

router.get('/customers', adminController.getCustomers);
router.get('/customers/:id', adminController.getCustomerById);
router.get('/orders', adminController.getOrders);
router.get('/orders/:id', adminController.getOrdersByCustomerId);

module.exports = router;
