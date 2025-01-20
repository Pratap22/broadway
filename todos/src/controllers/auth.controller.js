const jwt = require("jsonwebtoken");
const authService = require("../services/auth.service");

const login = async (req, res) => {
    const { user, error } = await authService.login(req.body);

    if (error) {
        return res.status(500).json({ message: "Failed to login", error: error.message });
    }

    const token = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_SECRET)

    res.send({
        jwt: token
    })
}

const register = async (req, res) => {

    const { user, error } = await authService.register(req.body);

    if (error) {
        return res.status(500).json({ message: "Failed to register user", error: error.message });
    }

    res.send({
        user: user
    })
}

const signout = (req, res) => {

};

module.exports = {
    login, register, signout
}