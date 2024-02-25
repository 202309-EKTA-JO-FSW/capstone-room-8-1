const mongoose = require('mongoose');
const Order = require('./orderSchema');
const Dish = require('./dishSchema');
const orderDetailsSchema = new mongoose.Schema({
    dishID: {
        type: [Dish.Schema],
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    orderID: {
        type: [Order.Schema],
    },
});

const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);

module.exports = OrderDetails;
