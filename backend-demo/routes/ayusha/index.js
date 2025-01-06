const express = require('express');

const ayushaRoutes = express.Router();

//  / -> Home
ayushaRoutes.get('/',
    (req, res) => {
        console.log('Get User Route');
        res.send('Get Ayusha Home');
    });

ayushaRoutes.get('/name',
    (req, res) => {
        console.log('Get User Route');
        res.send('My name is Ayusha');
    });

ayushaRoutes.get('/age',
    (req, res) => {
        console.log('Get User Route');
        res.send('I am 20 years old');
    });

ayushaRoutes.get('/detail',
    (req, res) => {
        console.log('Get User Route');
        res.send({ name: "Ayusha", age: 20 });
    });


module.exports = ayushaRoutes;