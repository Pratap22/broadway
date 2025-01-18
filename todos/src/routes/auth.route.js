const express = require('express');
const authController = require("../controllers/auth.controller")

const authRoutes = express.Router();

authRoutes.post('/register', authController.register);
authRoutes.post('/login', authController.login);
authRoutes.post('/signout', authController.signout);

module.exports = authRoutes