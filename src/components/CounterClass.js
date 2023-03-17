import React, { Component } from "react";
import Title from "./Title";

class CounterClass extends Component {
    // initializing phase
    constructor(props) {
        // super(props) is called for accesing access properties from parent class. also used for calling parent constructor
        super(props);
        this.state = {
            count: 0,
            timer: 0,
        };
        // event handlers has to be bind with this context else handlers wont work, this context returns undefined
        this.handleClick = this.handleClick.bind(this);
        // creating ref in a class component, used for accessing updated value without rerendering, used for accessing dom elements
        this.refElement = React.createRef();
    }

    // // mounting phase
    // runs before render method, means this method runs on both mounting and updating phase
    static getDerivedStateFromProps(props, state) {
        console.log("Get derived state from props  ", "Props : " + JSON.stringify(props), "   State  :" + JSON.stringify(state));
        return null;
    }

    // this method runs after render phase
    componentDidMount() {
        console.log("component did mount");
        // ref used for focusing dom input element
        this.refElement.current.focus();
        // // timer for rendering component
        // setInterval(() => {
        //     this.setState(prev => ({ timer: prev.timer + 1 }));
        // }, 1000);
    }

    // update phase : this method runs on every render, can be used to update dom element when necessary
    componentDidUpdate(prevProp, prevState) {
        // this.setState(prev => ({ prev.count == }));
        console.log("component did update", prevProp, this.props, prevState, this.state);
    }

    // this function runs on every update and have access to props and state values, returns boolean (default - true) and will not rerender on specific state or props if it returns false
    shouldComponentUpdate(nextProp, nextState) {
        console.log("should component update", nextProp, nextState);
        // if (nextState.count === 8) {
        //     return false;
        // } else {
        //     return true;
        // }
        return true;
    }

    // Unmounting phase:  this method runs when the component is unmounted, can be used for cleaning, optimization, remooving handelers etc..
    componentWillUnmount() {
        console.log("component will unmount");
        // clearInterval(this.interval);
    }


    handleClick() {
        // console.log("handle Click");
        this.setState(prev => ({ count: prev.count + 1 }));
    };


    render() {
        // for generating error inside rendering phase
        if (this.state.count === 10) throw new Error("Error inside render phase");
        return (
            <div>
                <Title />
                <p id="time">Timer : {this.state.count}</p>
                <hr></hr>
                <input ref={this.refElement} />
                <hr></hr>
                <p id="count">Count : {this.state.count}</p>
                <button onClick={this.handleClick}>Count</button>
            </div>
        );
    }
}


export default CounterClass;

// error boundaries are way to catch tricky errors that occur during the render phase. In the past, this would have caused the app to unmount completely, and the user would just see a blank web page
