const Dish = require('../models/dishSchema');

const createDish = async (req, res) => {
    try {
        const dish = await Dish.create(req.body);
        res.status(201).json({
            message: 'Dish created successfully',
            dish
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllDishes = async (_, res) => {
    try {
        const dishes = await Dish.find();
        res.json({
            message: 'List of dishes retrieved successfully',
            dishes
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDishById = async (req, res) => {
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
};

const updateDishById = async (req, res) => {
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
};

const deleteDishById = async (req, res) => {
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
};

module.exports = {
    createDish,
    getAllDishes,
    getDishById,
    updateDishById,
}