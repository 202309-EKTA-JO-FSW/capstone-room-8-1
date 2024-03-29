const mongoose = require('mongoose');

const {
    // DB_USER,
    // DB_PASSWORD,
    // DB_HOST,
    // DB_PORT,
    // DB_NAME,
    // TEST_DB_HOST,
    ATLAS_URL,
} = process.env;

// const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${
//     process.env.NODE_ENV === 'test' ? TEST_DB_HOST : DB_HOST
// }:${DB_PORT}/${DB_NAME}?authSource=admin`;

const url = `${ATLAS_URL}`;

const connectToMongo = () => {
    mongoose.connect(url, { useNewUrlParser: true });

    const db = mongoose.connection;

    db.once('open', () => {
        console.log('Database connected: ', url);
    });

    db.on('error', (err) => {
        console.error('Database connection error: ', err);
    });
};

module.exports = connectToMongo;
