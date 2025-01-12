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
const database = require('./db/database');

const PORT = 3000;

const app = express();
app.use(express.json()) // Body parser

app.get('/todos', async (req, res) => {
    const { completed, title } = req.query;
    try {
        let { data: todos, error } = await database
            .from('todo')
            .select('*')

        if (error) {
            return res.status(500).json({ message: "Failed to create todo", error: error.message });
        }

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
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: err.message });
    }
})

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { data: todo, error } = await database.from('todo').select('*').eq('id', id).maybeSingle()
        if (error) {
            return res.status(500).json({ message: `Failed to retrieve todo with id ${id}`, error: error.message });
        }
        res.json({ message: "Todo fetched", todo })
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: error.message });
    }
})


app.post('/todos', async (req, res) => {
    const { title, note } = req.body;
    if (!title) {
        return res.status(400).send({ message: "Title cannot be empty" })
    }

    try {
        const { data, error } = await database.from('todo').insert([{ title, note }]).select();

        if (error) {
            return res.status(500).json({ message: "Failed to create todo", error: error.message });
        }

        res.status(201).json({ message: "Todo Created", todo: data });
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: error.message });
    }
})

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        const { data: todo, error } = await database
            .from('todo')
            .update({ completed })
            .eq('id', id)
            .select().maybeSingle();

        if (error) {
            return res.status(500).json({ message: `Failed to update todo with id: ${id}`, error: error.message });
        }
        res.json({ message: "Todo status updated", todo })
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: error.message });
    }
})

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await database
            .from('todo')
            .delete()
            .eq('id', id)
            .select()
            .maybeSingle()
        if (error) {
            return res.status(500).json({ message: `Failed to del todo with id: ${id}`, error: error.message });
        }

        if (!data) {
            return res.status(404).json({ message: `No todo found with id: ${id}` });
        }

        res.status(204).json({ message: `Todo with id ${id} successfully deleted` })
    }
    catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: error.message });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})