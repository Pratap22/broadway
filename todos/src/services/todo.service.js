const Todo = require('../models/todo');

const getTodos = async (title, completed) => {
    try {
        const query = {};
        if (title) query.title = { $regex: title, $options: 'i' };
        if (completed !== undefined) query.completed = completed;

        const todos = await Todo.find(query);
        return { todos };
    } catch (error) {
        return { todos: null, error };
    }
};

const getTodoById = async (id) => {
    try {
        const todo = await Todo.findById(id);
        return { todo, error: null };
    } catch (error) {
        return { todo: null, error };
    }
};

const createTodo = async (todoData) => {
    try {
        const todo = new Todo(todoData);
        await todo.save();
        return { todo };
    } catch (error) {
        return { todo: null, error };
    }
};

const updateTodo = async (id, completed) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            id,
            { completed },
            { new: true }
        );
        return { todo, error: null };
    } catch (error) {
        return { todo: null, error };
    }
};

const deleteTodoById = async (id) => {
    try {
        const todo = await Todo.findByIdAndDelete(id);
        return { data: todo, error: null };
    } catch (error) {
        return { data: null, error };
    }
};

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodoById
};
