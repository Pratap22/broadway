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

const PORT = 3000;

const app = express();
app.use(express.json()) // Body parser

// Todo -> id, title, note, completed
let todos = [
    { id: 1, title: "Buy groceries", note: "Milk, Bread, Eggs, and Fruits", completed: false },
    { id: 2, title: "Buy React Native", note: "Focus on Expo and navigation", completed: false },
    { id: 3, title: "Call plumber", note: "Fix the kitchen sink", completed: true },
    { id: 4, title: "Prepare for meeting", note: "Create slides and summary", completed: false },
    { id: 5, title: "Go for a run", note: "Morning run for 30 minutes", completed: true },
    { id: 6, title: "Read a book", note: "Finish 'Atomic Habits' by James Clear", completed: false },
    { id: 7, title: "Water the plants", note: "Don’t forget the indoor plants", completed: false },
    { id: 8, title: "Plan weekend trip", note: "Look into nearby hiking spots", completed: true },
    { id: 9, title: "Clean the garage", note: "Organize tools and dispose of old items", completed: false },
    { id: 10, title: "Write blog post", note: "Topic: 'Benefits of Serverless Architecture'", completed: true }
];

app.get('/todos', (req, res) => {
    const { completed } = req.query;
    const isCompleted = completed === 'true'
    res.send({
        todos: todos.filter(t => t.completed === isCompleted)
    })
})

app.get("/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((currrentTodo) => currrentTodo.id === Number(id))
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" })
    }

    res.json({ message: "Todo fetched", todo })
})


app.post('/todos', (req, res) => {
    const { title, note } = req.body;
    if (!title) {
        return res.status(400).send({ message: "Title cannot be empty" })
    }
    const newTodo = { id: Date.now(), title, note, completed: false };

    todos.push(newTodo);

    res.status(201).json({ message: "Todo Created", todo: newTodo })
})

app.put("/todos/:id", (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const todo = todos.find((currrentTodo) => currrentTodo.id === Number(id)) // if it matches the condition it returns the matched element else undefined

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" })
    }
    todo.completed = completed
    res.json({ message: "Todo status updated", todo })
})

app.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((currrentTodo) => currrentTodo.id === Number(id))
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" })
    }
    todos = todos.filter(t => t.id !== todo.id)

    res.json({ message: `Todo with id ${todo.id} successfully deleted` })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})