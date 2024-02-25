const mongoose = require('mongoose');
const Dish = require('./dishSchema');
const Cart = require('./cartSchema');
const cartDetailsSchema = new mongoose.Schema({
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
    cartID: {
        type: [Cart.Schema],
    },
});

const CartDetails = mongoose.model('CartDetails', cartDetailsSchema);

module.exports = CartDetails;
