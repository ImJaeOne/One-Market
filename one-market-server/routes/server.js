const express = require('express');
const cors = require('cors');
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const askRoutes = require('./askRoutes');
const answerRoutes = require('./answerRoutes');
const session = require('express-session');
const morgan = require('morgan');

const app = express();
const port = 3006;

app.use(morgan('dev'));

app.use(
    session({
        secret: 'av*Sve#sd%%fdsa',
        resave: false,
        saveUninitialized: true,
        cookie: {
            domain: 'localhost',
            path: '/',
            maxAge: 24 * 6 * 60 * 10000,
            sameSite: 'lax',
            httpOnly: true,
            secure: false, //https일 경우 true로 설정
        },
    })
);

app.use(
    cors({
        origin: 'http://localhost:3005',
        methods: ['GET', 'POST', 'OPTIONS'],
        credentials: true,
    })
);

app.use(express.json());

app.use('/api', userRoutes);
app.use('/product', productRoutes);
app.use('/uploads', express.static('../database/uploads'));
app.use('/ask', askRoutes);
app.use('/answer', answerRoutes);

app.listen(port, () => {
    console.log('one-market-server on!');
});
