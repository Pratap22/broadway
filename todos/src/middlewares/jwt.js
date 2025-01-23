const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
    try {
        const jwtToken = req.cookies.JWT_TOKEN;
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({error: true, message: error.message})
    }
}

module.exports = {
    isLoggedIn
}

// Ways of exchanging JWT token
//  1. Cookies -> 1 class required
//  2. Headers