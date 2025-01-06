const express = require('express');

const dineshRoutes = express.Router();

dineshRoutes.use((req, res, next) => {
    console.log('dinesh middleware');
    next()
})

//  / -> Home
dineshRoutes.get('/',
    (req, res) => {
        console.log('Get User Route');
        res.send('Get Dinesh Home');
    });

dineshRoutes.get('/name',
    (req, res) => {
        console.log('Get User Route');
        res.send('My name is Dinesh');
    });

dineshRoutes.get('/age',
    (req, res) => {
        console.log('Get User Route');
        res.send('I am 20 years old');
    });

dineshRoutes.get('/detail',
    (req, res) => {
        console.log('Get User Route');
        res.send({ name: "Dinesh", age: 20 });
    });


module.exports = dineshRoutes;