const mongoose = require('mongoose');
const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    address: {
        street: { type: String },
        city: { type: String },
    },
    phoneNumber: { type: Number, required: true, unique: true },
    logoImage: { type: String },
    category: {
        type: String,
        enum: ['coffeshop', 'restaurant'],
        default: 'restaurant'
    },
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;
