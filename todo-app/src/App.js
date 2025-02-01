import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKey: "personal" };
  }

  onSelectTab = (key) => {
    this.setState({ selectedKey: key });
  };
  render() {
    const { selectedKey } = this.state;
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
      </div>
    );
  }
}

export default App;
