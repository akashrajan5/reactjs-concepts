import { Component, createRef } from "react";
import UserContext from "./UserContext";

class ContextClass extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.user = createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log(this.context);
    }

    componentDidUpdate() {
        console.log(this.context);
    }

    handleChange() {
        this.context.changeName(this.user.current.value.toString());
    }

    render() {
        return (
            <>
                <p>Update Context from another component</p>
                <input type='text' ref={this.user} />
                <button onClick={this.handleChange}>Update Context</button>
            </>
        );
    }
}

export default ContextClass;