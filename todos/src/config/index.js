const dotenv = require("dotenv")
const Joi = require('joi');
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object({
    MONGO_URI: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
}).unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env, { abortEarly: false })

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
    mongoUri: envVars.MONGO_URI,
    jwtSecret: envVars.JWT_SECRET
}