const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/getRestaurant', customerController.getRestaurant);

module.exports = router;
