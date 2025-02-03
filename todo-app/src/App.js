import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TextInput from "./components/TextInput";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: "personal",
      text: "",
      todos: [
        { title: "Professional Work No. 1", completed: false },
        { title: "Professional Work No. 3", completed: true },
        { title: "Professional Work No. 4", completed: false },
      ],
    };
  }

  onSelectTab = (key) => {
    this.setState({ selectedKey: key });
  };

  addNewTodo = () => {
    const { text, todos } = this.state;
    if (!text) {
      return "";
    }
    const newTodo = { title: text, completed: false };
    todos.push(newTodo);
    this.setState({ todos, text: "" });
  };

  render() {
    const { selectedKey, text, todos } = this.state;
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
            buttonText="Add"
            onClick={this.addNewTodo}
            onChange={(text) => this.setState({ text })}
            value={text}
          />
          <div className="bg-app-50 mt-6 rounded-3xl">
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.title}
                checked={todo.completed}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
