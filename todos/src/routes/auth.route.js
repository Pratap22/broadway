const express = require('express');
const authController = require("../controllers/auth.controller");
const { authValidation } = require('../validations');
const validate = require('../middlewares/validate');

const authRoutes = express.Router();

authRoutes.post('/register', validate(authValidation.registerSchema), authController.register);
authRoutes.post('/login',validate(authValidation.loginSchema), authController.login);
authRoutes.post('/signout', authController.signout);

module.exports = authRoutes