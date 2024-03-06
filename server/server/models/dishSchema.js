const mongoose = require('mongoose');
const DishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    image: {
        type: String,
    },
    category: {
        type: String,
        enum: ['cocktail', 'dish'],
    },
    restaurantID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
});

const Dish = mongoose.model('Dish', DishSchema);
module.exports = Dish;
