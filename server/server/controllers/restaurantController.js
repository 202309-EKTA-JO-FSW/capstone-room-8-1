const Restaurant = require('../models/restaurantSchema');

async function addNewRestaurant(req, res) {
    try {
        const newRestaurant = await Restaurant.create(req.body);
        res.status(201).json({
            message: 'Restaurant added successfully',
            restaurant: newRestaurant,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAllRestaurants(req, res) {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getRestaurantById(req, res) {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateRestaurantById(req, res) {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteRestaurantById(req, res) {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getRestaurant = async (_, res) => {
    try {
        const lstRestaurant = await Restaurant.find({});
        res.status(200).json({
            message: 'List of Restaurant Results',
            restaurant: lstRestaurant,
        });
    } catch (err) {
        res.status(422).json({
            message: 'Error while getting Restaurant list',
            error: err.message,
        });
    }
};

module.exports = {
    addNewRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById,
    getRestaurant,

};
