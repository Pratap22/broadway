const express = require('express');

const satyamRoutes = express.Router();

//  / -> Home
satyamRoutes.get('/',
    (req, res) => {
        console.log('Get User Route');
        res.send('Get Satyam Home');
    });

satyamRoutes.get('/name',
    (req, res) => {
        console.log('Get User Route');
        res.send('My name is Satyam');
    });

satyamRoutes.get('/age',
    (req, res) => {
        console.log('Get User Route');
        res.send('I am 20 years old');
    });

satyamRoutes.get('/detail',
    (req, res) => {
        console.log('Get User Route');
        res.send({ name: "Satyam", age: 20 });
    });


module.exports = satyamRoutes;