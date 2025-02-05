import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TextInput from "./components/TextInput";
import TodoItem from "./components/TodoItem";
import deleteIcon from "./assets/delete.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: "personal",
      todoItem: {
        title: "",
        completed: false,
      },
      todos: [{ title: 1, completed: false, _id: 1 }],
    };
  }

  onSelectTab = (key) => {
    this.setState({ selectedKey: key });
  };

  addNewTodo = () => {
    const { todoItem, todos } = this.state;
    if (!todoItem.title) {
      return "";
    }
    if (todoItem._id) {
      this.setState({
        todos: todos.map((todo) => {
          if (todo._id === todoItem._id) {
            todo = todoItem;
          }
          return todo;
        }),
        todoItem: { title: "", completed: false },
      });
    } else {
      const newTodo = { ...todoItem, _id: Date.now() };
      todos.push(newTodo);
      this.setState({ todos, todoItem: { title: "", completed: false } });
    }
  };

  onToggle = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map((todo) => {
        if (todo._id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
    });
  };

  onDelete = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter((todo) => {
        return todo._id !== id;
      }),
    });
  };

  onRowClick = (id) => {
    const { todos } = this.state;
    const currItem = todos.find((todo) => todo._id === id);
    this.setState({ todoItem: currItem });
  };

  clearCompleted = () => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(todo => !todo.completed) });
  }

  render() {
    const { selectedKey, todoItem, todos } = this.state;
    return (
      <div>
        <Header />
        <Tabs
          tabs={[
            { key: "personal", name: "Personal" },
            { key: "professional", name: "Professional" },
          ]}
          selectedKey={selectedKey}
          onSelectTab={(key) => this.onSelectTab(key)}
        />
        <div className="px-48">
          <TextInput
            placeholder="What do you need to do?"
            buttonText={todoItem._id ? "Update" : "Add"}
            onClick={this.addNewTodo}
            onChange={(text) =>
              this.setState({ todoItem: { ...todoItem, title: text } })
            }
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
                    onToggle={() => this.onToggle(todo._id)}
                    onDelete={() => this.onDelete(todo._id)}
                    onRowClick={() => this.onRowClick(todo._id)}
                  />
                ))}
                <div className="pb-2 pt-4">
                  <div className="flex justify-end mr-4" onClick={this.clearCompleted}>
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
  }
}

export default App;
