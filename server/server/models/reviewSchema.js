const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    },
    review: {
        type: String,
    },
    restaurantID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
});

const review = mongoose.model('Review', reviewSchema);
module.exports = review;
