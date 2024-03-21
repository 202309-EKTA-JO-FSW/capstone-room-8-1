const mongoose = require('mongoose');
const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zipCode: { type: Number },
    },
    phoneNumber: { type: Number, required: true, unique: true },
    logoImage: { type: String },
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;
