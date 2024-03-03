const express = require('express');
const cors = require('cors');
const adminRouter = require('./routes/admin');
const customerRouter = require('./routes/customer');
const publicRouter = require('./routes/public');
const cookieParser = require('cookie-parser');
const isAuthN = require('./middleware/isAuthenticated');
const isAuthZ = require('./middleware/isAuthorized');

require('dotenv').config();

const connectToMongo = require('./db/connection');

const app = express();
const port =
    process.env.NODE_ENV === 'test'
        ? process.env.NODE_LOCAL_TEST_PORT
        : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    connectToMongo();
});

// Routes
app.use('/admin', isAuthN, isAuthZ, adminRouter);
app.use('/customer', isAuthN, customerRouter);
app.use('/', publicRouter);

app.get('/test', async (req, res) => {
    res.json(
        'Server connection to client works!!  Good Luck with your capstones :D'
    );
});

module.exports = app;
