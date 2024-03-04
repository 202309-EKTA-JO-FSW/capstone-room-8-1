const Dish = require('../models/dishSchema');
const Restaurant = require('../models/restaurantSchema');
const User = require('../models/userSchema');
const Review = require('../models/reviewSchema');
const bycrypt = require('bcrypt');

const getRestaurants = async (_, res) => {
    try {
        const lstRestaurant = await Restaurant.find({});
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

const getDishes = async (req, res) => {
    try {
        const { id } = req.params;
        const lstDishes = await Dish.find({
            restaurantID: id,
        });
        res.status(200).json({
            message: 'List of Dishes Results',
            Dishes: lstDishes,
        });
    } catch (err) {
        res.status(422).json({
            message: 'Error while getting Dishes list',
            error: err.message,
        });
    }
};

const signUp = async (req, res) => {
    try {
        const { username, email, password, address, phone } = req.body;
        const user = await User.create({
            username,
            email,
            password,
            address,
            phone,
        });
        const token = user.generateAuthToken();
        res.cookie('jwt', token, {
            secure: false,
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
        });
        res.status(201).json({
            message: 'User created successfully',
            user,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bycrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = user.generateAuthToken();
        res.cookie('jwt', token, {
            secure: false,
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
        });
        res.status(200).json({
            message: 'User logged in successfully',
            user,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getReviewsByRestaurantId = async (req, res) => {
    try {
        const { restaurantId } = req.params;
        const reviews = await Review.find({ restaurantID: restaurantId });
        if (!reviews.length) {
            return res
                .status(404)
                .json({ message: 'there is no reviews for this restaurant' });
        }
        res.status(200).json({
            message: 'List of Reviews for Restaurant',
            reviews,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error while getting reviews for restaurant',
            error: err.message,
        });
    }
};

module.exports = {
    getRestaurants,
    signUp,
    signIn,
    getDishes,
    getReviewsByRestaurantId,
};
