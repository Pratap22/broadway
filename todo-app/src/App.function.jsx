import { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TextInput from "./components/TextInput";
import TodoItem from "./components/TodoItem";
import deleteIcon from "./assets/delete.png";

const App = () => {
  const [selectedKey, setSelectedKey] = useState("personal");
  const [todos, setTodos] = useState([]);
  // What we passed to useState is initial value
  // [currentState, functionToUpdateTheCurrentState] = useState(initialValue);
  const [todoItem, setTodoItem] = useState({
    title: "",
    completed: false,
  });

  const addNewTodo = () => {
    console.log(todoItem);
    if (!todoItem.title) {
      return "";
    }
    if (todoItem._id) {
      setTodos(
        todos.map((todo) => {
          if (todo._id === todoItem._id) {
            todo = todoItem;
          }
          return todo;
        })
      );
      setTodoItem({ title: "", completed: false });
    } else {
      const newTodo = { ...todoItem, _id: Date.now() };
      setTodos([...todos, newTodo]);
      setTodoItem({ title: "", completed: false });
    }
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo._id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  };

  const onDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo._id !== id;
      })
    );
  };

  const onRowClick = (id) => {
    const currItem = todos.find((todo) => todo._id === id);
    setTodoItem(currItem);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <Header />
      <Tabs
        tabs={[
          { key: "personal", name: "Personal" },
          { key: "professional", name: "Professional" },
        ]}
        selectedKey={selectedKey}
        onSelectTab={setSelectedKey}
      />
      <div className="px-48">
        <TextInput
          placeholder="What do you need to do?"
          buttonText={todoItem._id ? "Update" : "Add"}
          onClick={addNewTodo}
          onChange={(text) => setTodoItem({ ...todoItem, title: text })}
          value={todoItem.title}
        />

        <div className="bg-app-50 mt-6 rounded-3xl">
          {todos.length > 0 ? (
            <>
              {todos.map((todo, index) => (
                <TodoItem
                  key={index}
                  text={todo.title}
                  checked={todo.completed}
                  onToggle={() => onToggle(todo._id)}
                  onDelete={() => onDelete(todo._id)}
                  onRowClick={() => onRowClick(todo._id)}
                />
              ))}
              <div className="pb-2 pt-4">
                <div className="flex justify-end mr-4" onClick={clearCompleted}>
                  <img alt="clear" src={deleteIcon} className="w-6" />
                  <p className="ml-2 text-app">Clear Completed</p>
                </div>
              </div>
            </>
          ) : (
            <div className="p-4 text-center">
              No todos found. Please add new todo.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
