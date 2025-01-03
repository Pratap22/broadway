const express = require('express');

// Groupped the common routes
const userRoutes = express.Router();

// Route level middleware
userRoutes.use((req, res, next) => {
    console.log('userRoutes middleware');
    next()
})

userRoutes.get('/',
    (req, res) => {
        console.log('Get User Route');
        res.send('Hello Get user route!');
    });

userRoutes.get('/about',
    (req, res) => {
        console.log('Get User Route');
        res.send('Hello Get user route!');
    });

userRoutes.get('/detail',
    (req, res) => {
        console.log('Get User Route');
        res.send('Hello Get user route!');
    });

module.exports = userRoutes;