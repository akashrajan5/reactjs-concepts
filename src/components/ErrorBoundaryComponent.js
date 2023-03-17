import { Component } from "react";


// this component only renders on catching errors, 
export class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    // this method runs before unmounting phase and when error occures
    static getDerivedStateFromError(error) {
        console.log('get derivedstatefromError', error);
        return { error: error.toString() };
    }

    // this method runs after unmounting phase, can be used to create side effects after error occures
    componentDidCatch(error, info) {
        // log these errors inside any logs for identifying error name and component which caused error
        console.log("component did catch method", "Error :", error, "\n\nInfo :", info);
        // window.location.reload(true); // reload or do necessary events on error
    }

    render() {
        // this return can be used as fallback UI if error occures in any child component
        if (this.state.error) return <h3>Something went wrong</h3>;
        // this return returns the childrens, which is the child components wrapped inside ErrorBoundaries component
        return this.props.children;
    }
};