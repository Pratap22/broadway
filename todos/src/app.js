const express = require('express');
const connectDB = require('./db/db');
const todoRoutes = require('./routes/todo.route');
const authRoutes = require('./routes/auth.route');

const PORT = 3000;

const app = express();
app.use(express.json()) // Body parser

connectDB();

app.use("/todos", todoRoutes)
app.use("/auth", authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})