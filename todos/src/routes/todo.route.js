const express = require('express');
const todoController = require("../controllers/todo.contoller");
const { isLoggedIn } = require('../middlewares/jwt');

const todoRoutes = express.Router();

todoRoutes.get('/', isLoggedIn, todoController.getTodos)

todoRoutes.get("/:id", todoController.getTodoById)

todoRoutes.post('/', isLoggedIn, todoController.createTodo)

todoRoutes.put("/:id", todoController.updateTodoById)

todoRoutes.delete("/:id", todoController.deleteTodoById)

module.exports = todoRoutes