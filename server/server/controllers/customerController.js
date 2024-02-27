const restaurant = require('../models/restaurantSchema');

const getRestaurant = async (_, res) => {
    try {
        const lstRestaurant = await restaurant.find({});

        res.status(200).json({
            message: 'List of Restaurant Results',
            Restaurant: lstRestaurant,
        });
    } catch (err) {
        res.status(422).json({
            message: 'Error while getting Restaurant list',
            error: err.message,
        });
    }
};

module.exports = {
    getRestaurant,
};
