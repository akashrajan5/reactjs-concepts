import { Component } from "react";
import UserContext from "./UserContext";

class ContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'aaa',
            token: 'Bearer bbb'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name) {
        this.setState(prev => ({ email: name }));
    }

    render() {
        return <UserContext.Provider value={{ email: this.state.email, token: this.state.token, changeName: this.handleChange }}>{this.props.children}</UserContext.Provider>;
    }
}

export default ContextProvider;