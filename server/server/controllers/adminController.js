const Restaurant = require('../models/restaurantSchema');
const Dish = require('../models/dishSchema');
const User = require('../models/userSchema');
const Order = require('../models/orderSchema');

const getCustomers = async (_, res) => {
    try {
        const customers = await User.find({ type: 'customer' });
        if (!customers.length) {
            return res.status(404).json({ message: 'there are no customers' });
        }
        res.status(200).json({
            message: 'List of Customers',
            customers,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting customer list',
            error: err.message,
        });
    }
};

const getCustomerById = async (req, res) => {
    try {
        const customerId = req.params.id;
        const customer = await User.findById(customerId);
        if (!customer) {
            return res
                .status(404)
                .json({ message: 'there are no customer by this id' });
        }
        res.status(200).json({
            message: 'Customer details',
            customer,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting customer details',
            error: err.message,
        });
    }
};

// get orders for all customers
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        if (!orders.length) {
            return res.status(404).json({ message: 'there are no orders' });
        }
        res.status(200).json({
            message: 'List of Orders for all Customer',
            orders,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting orders for customer',
            error: err.message,
        });
    }
};

const getOrdersByCustomerId = async (req, res) => {
    try {
        const customerId = req.params.id;
        const orders = await Order.find({ userID: customerId });
        if (!orders.length) {
            return res
                .status(404)
                .json({ message: 'there are no orders for this customer' });
        }
        res.status(200).json({
            message: 'List of Orders for Customer',
            orders,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting order details',
            error: err.message,
        });
    }
};

async function addNewRestaurant(req, res) {
    try {
        const { name, address, phoneNumber, category, logoImage } = req.body;
        const newRestaurant = await Restaurant.create({
            name,
            address,
            phoneNumber,
            category,
            logoImage,
        });
        res.status(201).json({
            message: 'Restaurant added successfully',
            restaurant: newRestaurant,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
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
            restaurant,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateRestaurantById(req, res) {
    try {
        const { name, address, phoneNumber, category, logoImage } = req.body;
        const restaurant = await Restaurant.findByIdAndUpdate(
            req.params.id,
            { name, address, phoneNumber, category, logoImage },
            { new: true, runValidators: true }
        );
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json({
            message: 'Restaurant updated successfully',
            restaurant,
        });
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
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createDish(req, res) {
    try {
        const { dishName, description, price, image, category, restaurantID } =
            req.body;
        const dish = await Dish.create({
            dishName,
            description,
            price,
            image,
            category,
            restaurantID,
        });
        res.status(201).json({
            message: 'Dish created successfully',
            dish,
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
        res.status(200).json({
            message: 'Dish retrieved successfully',
            dish,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateDishById(req, res) {
    try {
        const { dishName, description, price, image, category } = req.body;
        const dish = await Dish.findByIdAndUpdate(
            req.params.id,
            { dishName, description, price, image, category },
            {
                new: true,
                runValidators: true,
            }
        );
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found' });
        }
        res.status(200).json({
            message: 'Dish updated successfully',
            dish,
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
        res.status(200).json({
            message: 'Dish deleted successfully',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getCustomerById,
    getCustomers,
    getOrders,
    getOrdersByCustomerId,
    addNewRestaurant,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById,
    createDish,
    getDishById,
    updateDishById,
    deleteDishById,
};
