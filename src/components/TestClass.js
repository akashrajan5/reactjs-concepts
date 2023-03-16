import React, { Component, createRef } from "react";

class TestClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.refElement = createRef();
        // this.clickHandler = this.clickHandler.bind(this);
        console.log(this);
    }

    clickHandler = () => {
        // this.setState(prev => ({ count: prev.count + 1 }), () => console.log(this.state.count));
        console.log(this);
    };

    componentDidMount() {
        // console.log(this.refElement);
    }


    render() {
        return (
            <div>
                <h3 ref={this.refElement}>{this.state.count}</h3>
                <h3>{this.props.message}</h3>
                <button onClick={this.clickHandler}>Increment</button>
            </div>
        );
    }
}

export default TestClass;