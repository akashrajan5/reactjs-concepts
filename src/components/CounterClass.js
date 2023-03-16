import React, { Component } from "react";
import Title from "./Title";

export class CounterClass extends Component {

    // mounting phase
    constructor(props) {
        super(props);
        this.state = { count: 0, timer: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.refElement = React.createRef();
    }

    // runs before render method, means this method runs on both mounting and updating
    static getDerivedStateFromProps(props, state) {
        console.log("Get derived state from props  ", "Props : " + JSON.stringify(props), "   State  :" + JSON.stringify(state));
        return null;
    }

    // this method runs after render phase
    componentDidMount() {
        console.log("component did mount");
        this.refElement.current.focus();

        // timer for rendering component
        // this.interval = setInterval(() => {
        //     this.setState(prev => ({ timer: prev.timer + 1 }));
        // }, 1000);
    }

    componentDidUpdate() {
        console.log("component did update");
        document.getElementById("time").innerHTML = `Timer is ${this.state.timer}`;
        document.getElementById("count").innerHTML = `Counter ${this.state.count}`;
    }

    shouldComponentUpdate(nextProp, nextState) {
        console.log("should component update", nextProp, nextState);
        if (nextState.count == 8) {
            return false;
        } else {
            return true;
        }
    }

    componentWillUnmount() {
        console.log("component will unmount");
        // clearInterval(this.interval);
    }

    componentDidCatch() {
        console.log("component did catch");
    }

    handleClick() {
        console.log("handle Click");
        this.setState(prev => ({ count: prev.count + 1 }));
    };



    render() {
        if (this.state.count === 8) throw Error("Custom Error");
        return (
            <div>
                <Title />
                <h4 id="time"></h4>
                <hr></hr>
                <input ref={this.refElement} />
                <hr></hr>
                <p id="count"></p>
                <button onClick={this.handleClick}>Count</button>
            </div>
        );
    }
}