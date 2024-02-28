const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['admin', 'customer'],
        default: 'customer',
    },
});

userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        { _id: this._id, type: this.type },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h',
        }
    );
};

const User = mongoose.model('User', userSchema);

module.exports = User;
