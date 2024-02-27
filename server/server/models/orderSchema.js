const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    restaurantID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
    items: [
        {
            dishID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Dish',
            },
            quantity: {
                type: Number,
                required: true,
                min: 0,
            },
            totalPrice: {
                type: Number,
                required: true,
            },
        },
    ],
    totalBill: {
        type: Number,
        required: true,
        min: 0,
    },
    orderTime: {
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
