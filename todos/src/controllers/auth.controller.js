const jwt = require("jsonwebtoken");
const authService = require("../services/auth.service")

const login = async (req, res) => {
    const token = jwt.sign({ "name": "Pratap", age: 30 }, process.env.JWT_SECRET)

    res.json({ token })
}

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: true, message: "title, email and password is required" })
    }

    const { user, error } = await authService.register({ name, email, password });

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