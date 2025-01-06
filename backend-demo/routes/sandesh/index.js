const express = require('express');

const sandeshRoutes = express.Router();

//  / -> Home
sandeshRoutes.get('/',
    (req, res) => {
        console.log('Get User Route');
        res.send('Get Sandesh Home');
    });

sandeshRoutes.get('/name',
    (req, res) => {
        console.log('Get User Route');
        res.send('My name is Sandesh');
    });

sandeshRoutes.get('/age',
    (req, res) => {
        console.log('Get User Route');
        res.send('I am 20 years old');
    });

sandeshRoutes.get('/detail',
    (req, res) => {
        console.log('Get User Route');
        throw new Error('This is a forced error');
        res.send({ name: "Sandesh", age: 20 });
    });


module.exports = sandeshRoutes;