const express = require('express');
const cookieParser = require('cookie-parser')
const connectDB = require('./db/db');
const todoRoutes = require('./routes/todo.route');
const authRoutes = require('./routes/auth.route');
const morgan = require('./config/morgan');

const PORT = 3000;

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(morgan.successHandler);
app.use(morgan.errorHandler);

connectDB();

app.use("/todos", todoRoutes)
app.use("/auth", authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})