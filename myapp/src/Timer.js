import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log("componentDidMount: Timer Started");
        // API Call -> 
        // Add timer / Interval etc

        this.interval = setInterval(() => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        if (prevState.count !== this.state.count) {
            console.log(`componentDidUpdate: Count updated to ${this.state.count}`);
        }
    }

    componentWillUnmount() {
        // Cleanup 
        // clean memory leaks
        // clear timers / intervals
        console.log("componentWillUnmount: Timer Stopped");
        `clearInterval`(this.interval);
    }

    changeCount = () => {
        const { count } = this.state
        this.setState({ count: count + 1 })
    }

    render() {
        console.log("Render: Rendering UI");
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Timer: {this.state.count} seconds</h1>
                <button onClick={this.changeCount}>Increment</button>
            </div>
        );
    }
}

// If I want to display anything I need to return an element from the render method

export default Timer;
