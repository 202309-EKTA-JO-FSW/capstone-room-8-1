const restaurant = require('../models/restaurantSchema');
const User = require('../models/userSchema')
const Order = require('../models/orderSchema')

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

const getCustomers = async (_, res) => {
    try {
        const customers = await User.find({ type: 'customer' });
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

const getOrdersById = async (req, res) => {
    try {
        const customerId = req.params.id;
        const orders = await Order.find({ customerId });
        res.status(200).json({
            message: 'List of Orders for Customer',
            orders,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting orders for customer',
            error: err.message,
        });
    }
};

const getOrderById = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
        res.status(200).json({
            message: 'Order details',
            order,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting order details',
            error: err.message,
        });
    }
};

module.exports = { getRestaurant, getCustomerById, getCustomers, getOrdersById, getOrderById };
