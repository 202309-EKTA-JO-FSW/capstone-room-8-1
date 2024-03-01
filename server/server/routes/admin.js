const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/restaurants', adminController.addNewRestaurant);
router.get('/restaurants', adminController.getAllRestaurants);
router.get('/restaurants/:id', adminController.getRestaurantById);
router.get('/restaurants/:id/dishes', adminController.getDishes);
router.put('/restaurants/:id', adminController.updateRestaurantById);
router.delete('/restaurants/:id', adminController.deleteRestaurantById);

router.post('/dishes', adminController.createDish);
router.get('/dishes', adminController.getAllDishes);
router.get('/dishes/:id', adminController.getDishById);
router.put('/dishes/:id', adminController.updateDishById);
router.delete('/dishes/:id', adminController.deleteDishById);





// router.put("/admin/item/:id", adminController.updateItem);

// router.delete("/admin/item/:id", adminController.deleteItem);

// router.get("/admin/item/search", adminController.searchItem);

module.exports = router;
