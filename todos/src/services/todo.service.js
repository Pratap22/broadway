const database = require('../db/database');
const Todo = require('../models/todo');

const getTodos = async (title, completed) => {

    try {

        const todos = await Todo.find();

        return { todos };

    } catch (error) {
        return { todos: null, error };
    }
}

const getTodoById = async (id) => {
    const { data: todo, error } = await database
        .from('todo')
        .select('*')
        .eq('id', id)
        .maybeSingle()

    return { todo, error }
}

const createTodo = async (todoData) => {
    try {

        const todo = await Todo.create(todoData);

        return { todo }

    } catch (error) {
        return { error }
    }
}

const updateTodo = async (id, completed) => {
    const { data: todo, error } = await database
        .from('todo')
        .update({ completed })
        .eq('id', id)
        .select()
        .single();

    return { todo, error }
}

const deleteTodoById = async (id) => {
    const { data, error } = await database
        .from('todo')
        .delete()
        .eq('id', id)
        .select()
        .single();

    return { data, error }
}

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodoById
}