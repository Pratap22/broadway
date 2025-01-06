const express = require('express');

const anajaliRoutes = express.Router();

//  / -> Home
anajaliRoutes.get('/',
    (req, res) => {
        console.log('Get User Route');
        res.send('Get Anjali Home');
    });

anajaliRoutes.get('/name',
    (req, res) => {
        console.log('Get User Route');
        res.send('My name is Anjali');
    });

anajaliRoutes.get('/age',
    (req, res) => {
        console.log('Get User Route');
        res.send('I am 20 years old');
    });

anajaliRoutes.get('/detail',
    (req, res) => {
        console.log('Get User Route');
        res.send({ name: "Anjali", age: 20 });
    });


module.exports = anajaliRoutes;