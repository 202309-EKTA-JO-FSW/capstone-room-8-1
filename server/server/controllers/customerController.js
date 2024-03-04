const User = require('../models/userSchema');
const Order = require('../models/orderSchema');
const Review = require('../models/reviewSchema');
const Cart = require('../models/cartSchema');
const Dish = require('../models/dishSchema');

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

const getReviewForOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const review = await Review.find({ orderId });
        if (!review.length) {
            return res
                .status(404)
                .json({ message: 'there is no order by this Id' });
        }
        res.status(200).json({
            message: 'Order review',
            review,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting review for order',
            error: err.message,
        });
    }
};

const postReviewForOrder = async (req, res) => {
    try {
        const { review } = req.body;
        const { orderId } = req.params;
        const order = await Order.findById(orderId);
        if (!order) {
            return res
                .status(404)
                .json({ message: 'There is no order by this Id' });
        }
        const currentReview = await Review.find({ orderId });
        if (currentReview) {
            return res
                .status(400)
                .json({ message: 'There is already review for this order!' });
        }
        const userId = order.userID;
        const restaurantId = order.restaurantID;
        const newReview = await Review.create({
            userID: userId,
            orderId,
            review,
            restaurantID: restaurantId,
        });
        res.status(201).json({
            message: 'Review added successfully',
            review: newReview,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while posting review for order',
            error: err.message,
        });
    }
};

const getCart = async (req, res) => {
    try {
        const id = req.user._id;
        const cart = await Cart.findOne({ userID: id });
        if (!cart) {
            return res.status(404).json({ message: 'the cart is empty' });
        }
        res.status(200).json({
            message: 'Cart details',
            cart,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting cart',
            error: err.message,
        });
    }
};

const addToCart = async (req, res) => {
    try {
        const id = req.user._id;
        const { dishId, quantity } = req.body;

        const dish = await Dish.findById(dishId);

        if (!dish) {
            return res
                .status(404)
                .json({ message: 'there is no dish by this Id' });
        }
        let cart = await Cart.findOne({ userID: id });
        console.log(cart);
        if (!cart) {
            cart = await Cart.create({
                userID: id,
                restaurantID: dish.restaurantID,
                items: [
                    {
                        dishID: dishId,
                        quantity,
                        price: dish.price,
                    },
                ],
            });
            res.status(201).json({
                message: 'Cart added successfully',
                cart,
            });
        } else {
            const existingItem = cart.items.find((item) => {
                return item.dishID.toString() === dishId;
            });

            if (existingItem) {
                const newQuantity = existingItem.quantity + quantity;

                if (newQuantity >= 0) {
                    cart = await Cart.findOneAndUpdate(
                        { userID: id, 'items.dishID': dishId },
                        { $set: { 'items.$.quantity': newQuantity } },
                        { new: true }
                    );
                }
            } else {
                cart.items.push({
                    dishID: dishId,
                    quantity,
                    price: dish.price,
                });
                await cart.save();
            }
            res.status(200).json({
                message: 'Cart updated successfully',
                cart,
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error while adding to cart',
            error: err.message,
        });
    }
};

const deleteCart = async (req, res) => {
    try {
        const id = req.user._id;
        await Cart.findOneAndDelete({ userID: id });
        res.status(200).json({
            message: 'Cart deleted successfully',
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while deleting cart',
            error: err.message,
        });
    }
};

const checkout = async (req, res) => {
    try {
        const id = req.user._id;
        const cart = await Cart.findOne({ userID: id });
        if (!cart) {
            return res.status(404).json({ message: 'the cart is empty' });
        }
        const order = await Order.create({
            userID: id,
            restaurantID: cart.restaurantID,
            items: cart.items,
            // total bill for all cart items
            totalBill: cart.items.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            ),
        });
        await Cart.findOneAndDelete({ userID: id });
        res.status(201).json({
            message: 'Order placed successfully',
            order,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while placing order',
            error: err.message,
        });
    }
};

module.exports = {
    getCustomerById,
    getCustomers,
    getOrdersById,
    getOrderById,
    getReviewForOrder,
    postReviewForOrder,
    getCart,
    addToCart,
    deleteCart,
    checkout,
};
