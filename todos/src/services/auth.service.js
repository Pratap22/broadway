const User = require("../models/user")
const bcrypt = require("bcrypt");

const register = async (userData) => {
    try {
        const dbUser = User.find({ email: userData.email });
        if (dbUser) {
            return { error: { message: `User with ${userData.email} already exists` } }
        }
        const passwordHash = await bcrypt.hash(userData.password, 10)

        userData.password = passwordHash;
        const user = new User(userData);
        await user.save();

        return { user }

    } catch (error) {
        return { error }
    }
}


module.exports = { register }