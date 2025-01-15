// Todo
// 1. Add a new todo (done)
// 2. Remove a todo (remove todo)
// 3. Mark a todo as completed (done)
// 4. Reverse the todo status (done)
// 5. Filter the todos
// 6. Get all todos (done)
// 7. Get all completed todos (done)
// 8. Get all uncompleted todos (done)
// 9. Get todo by Id (done)

const express = require('express');
const connectDB = require('./db/db');
const todoRoutes = require('./routes/todo.route');

const PORT = 3000;

const app = express();
app.use(express.json()) // Body parser

connectDB();

app.use("/todos", todoRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})