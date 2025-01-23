const jwt = require("jsonwebtoken");
const { status: httpStatus } = require("http-status")
const authService = require("../services/auth.service");

const login = async (req, res) => {
    const { user, error } = await authService.login(req.body);

    if (error) {
        return res.status(500).json({ message: "Failed to login", error: error.message });
    }

    const token = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_SECRET)

    res.cookie('JWT_TOKEN', token).send({
        message: "Successfully loggedIN"
    })
}

const register = async (req, res) => {

    const { user, error } = await authService.register(req.body);

    if (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Failed to register user", error: error.message });
    }

    res.status(httpStatus.PERMANENT_REDIRECT).send({
        user: user
    })
}

const signout = (req, res) => {
    res.clearCookie('JWT_TOKEN').send({
        message: "Successfully signout"
    })
};

module.exports = {
    login, register, signout
}