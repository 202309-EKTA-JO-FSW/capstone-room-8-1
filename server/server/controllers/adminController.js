'use strict';

const Restaurant = require('../models/restaurantSchema');
const Dish = require('../models/dishSchema');

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

async function getAllRestaurants(_, res) {
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
}

async function getRestaurantById(req, res) {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(200).json({
            message: 'Restaurant retrieved successfully',
            restaurant: restaurant
        });
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

async function getDishes(req, res) {
    try {
        const restID = req.params.id;
        const dishes = await Dish.find({ restaurantID: restID });
        res.json(dishes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function createDish(req, res) {
    try {
        const dish = await Dish.create(req.body);
        res.status(201).json({
            message: 'Dish created successfully',
            dish
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllDishes(_, res) {
    try {
        const dishes = await Dish.find();
        res.json({
            message: 'List of dishes retrieved successfully',
            dishes
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getDishById(req, res) {
    try {
        const dish = await Dish.findById(req.params.id);
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found' });
        }
        res.json({
            message: 'Dish retrieved successfully',
            dish
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateDishById(req, res) {
    try {
        const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found' });
        }
        res.json({
            message: 'Dish updated successfully',
            dish
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteDishById(req, res) {
    try {
        const dish = await Dish.findByIdAndDelete(req.params.id);
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found' });
        }
        res.json({
            message: 'Dish deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addNewRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById,
    getDishes,
    createDish,
    getAllDishes,
    getDishById,
    updateDishById,
    deleteDishById
};
