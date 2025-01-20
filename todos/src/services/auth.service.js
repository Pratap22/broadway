const User = require("../models/user")
const bcrypt = require("bcrypt");

const register = async (userData) => {
    try {
        const dbUser = await User.find({ email: userData.email });
        if (dbUser.length) {
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

const login = async ({ email, password }) => {
    try {
        const dbUser = await User.findOne({ email });
        if (!dbUser) {
            return { error: { message: `User with ${email} does not exists` } }
        }

        const isMatched = await bcrypt.compare(password, dbUser.password)
        if (!isMatched) {
            return { error: { message: `The provided password for ${email} does not match` } }
        }

        return { user: dbUser }


    } catch (error) {
        return { error }
    }
}


module.exports = { register, login }