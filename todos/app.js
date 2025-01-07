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
const path = require('path')
const fs = require('fs').promises;
const express = require('express');

const PORT = 3000;

const app = express();
app.use(express.json()) // Body parser

const filePath = path.join(__dirname, 'todo.json')

const readTodos = async () => {
    try {
        const jsonString = await fs.readFile(filePath, 'utf-8')

        return JSON.parse(jsonString)
    } catch (error) {
        console.error("Error reading file")
        return []
    }
}

const writeTodos = async (todos) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(todos, null, 2))
        return []
    } catch (error) {
        console.error("Error writing todos file: ", error)
    }
}

app.get('/todos', async (req, res) => {
    const { completed, title } = req.query;
    const todos = await readTodos()
    let filteredTodos = todos;

    if (completed !== undefined) {
        const isCompleted = completed === 'true';
        filteredTodos = filteredTodos.filter(t => t.completed === isCompleted);
    }

    if (title) {
        const lowerTitle = title.toLowerCase();
        filteredTodos = filteredTodos.filter(t =>
            t.title.toLowerCase().includes(lowerTitle)
        );
    }
    res.send({
        todos: filteredTodos
    })
})

app.get("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const todos = await readTodos()
    const todo = todos.find((currrentTodo) => currrentTodo.id === Number(id))
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" })
    }

    res.json({ message: "Todo fetched", todo })
})


app.post('/todos', async (req, res) => {
    const { title, note } = req.body;
    if (!title) {
        return res.status(400).send({ message: "Title cannot be empty" })
    }
    const todos = await readTodos()
    const newTodo = { id: Date.now(), title, note, completed: false };
    todos.push(newTodo);
    
    await writeTodos(todos)

    res.status(201).json({ message: "Todo Created", todo: newTodo })
})

app.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const todos = await readTodos()
    const todo = todos.find((currrentTodo) => currrentTodo.id === Number(id)) // if it matches the condition it returns the matched element else undefined

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" })
    }
    todo.completed = completed
    await writeTodos(todos)
    res.json({ message: "Todo status updated", todo })
})

app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const todos = await readTodos()
    const todo = todos.find((currrentTodo) => currrentTodo.id === Number(id))
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" })
    }
    todos = todos.filter(t => t.id !== todo.id)
    await writeTodos(todos)
    res.json({ message: `Todo with id ${todo.id} successfully deleted` })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})