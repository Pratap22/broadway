const express = require('express');
const database = require('../db/database');
const todoController = require("../controllers/todo.contoller")

const todoRoutes = express.Router();


todoRoutes.get('/', todoController.getTodos)

todoRoutes.get("/:id", todoController.getTodoById)

todoRoutes.post('/', todoController.createTodo)

todoRoutes.put("/:id", todoController.updateTodoById)

todoRoutes.delete("/:id", todoController.deleteTodoById)

module.exports = todoRoutes