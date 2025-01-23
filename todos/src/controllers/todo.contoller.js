const todoService = require("../services/todo.service")

const getTodos = async (req, res) => {

    const { completed, title } = req.query;
    try {
        const { todos, error } = await todoService.getTodos(title, completed);

        if (error) {
            return res.status(500).json({ message: "Failed to fetch todos", error: error.message });
        }

        res.send({
            todos: todos
        })
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: error.message });
    }

}

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const { todo, error } = await todoService.getTodoById(id)

        if (error) {
            return res.status(500).json({ message: `Failed to retrieve todo with id ${id}`, error: error.message });
        }
        res.json({ message: "Todo fetched", todo })
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: error.message });
    }
}

const createTodo = async (req, res) => {
    const { title, note } = req.body;
    if (!title) {
        return res.status(400).send({ message: "Title cannot be empty" })
    }

    try {
        const { todo, error } = await todoService.createTodo({ title, note })

        if (error) {
            return res.status(500).json({ message: "Failed to create todo", error: error.message });
        }

        res.status(201).json({ message: "Todo Created", todo });
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: error.message });
    }
}

const updateTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        const { todo, error } = await todoService.updateTodo(id, completed)

        if (error) {
            return res.status(500).json({ message: `Failed to update todo with id: ${id}`, error: error.message });
        }
        res.json({ message: "Todo status updated", todo })
    } catch (error) {
        res.status(500).json({ message: "An unexpected error occurred", error: error.message });
    }
}

const deleteTodoById = async (req, res) => {
    try {
        throw Error("Error Aayo")
        const { id } = req.params;
        const { data, error } = await todoService.deleteTodoById(id);

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
}

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodoById,
    deleteTodoById
}