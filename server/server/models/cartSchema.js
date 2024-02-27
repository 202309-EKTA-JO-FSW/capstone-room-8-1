const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
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
            price: {
                type: Number,
                required: true,
            },
        },
    ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
