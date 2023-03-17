import { Component } from "react";

// error boundaries are way to catch tricky errors that occur during the render phase. In the past, this would have caused the app to unmount completely, and the user would just see a blank web page
// this component only renders on catching errors, or while an error occures
export class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 15,
            error: null
        };
    }

    // this method runs before unmounting phase and when error occures
    static getDerivedStateFromError(error) {
        console.log('get derivedstatefromError\n\n', error);
        return { error: error };
    }

    // this method runs after unmounting phase, can be used to create side effects after error occures
    componentDidCatch(error, info) {
        // log these errors inside any logs for identifying error name and component which caused error
        console.log("\n\nError :\n", error, "\n\nInfo :\n", info);
        // window.location.reload(true); // reload or do necessary events on error
        this.setInterval = setInterval(() => this.setState(prev => ({ timer: prev.timer - 1 })), 1000);
    }

    // this gets checked after the state changes
    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.setInterval);
            window.location.reload(true);
        };
    }


    render() {
        // this return can be used as fallback UI if error occures in any child component
        if (this.state.error) return <h3>Something went wrong, please reload this page or will reload in {this.state.timer} seconds</h3>;
        // this return returns the childrens, which is the child components wrapped inside ErrorBoundaries component
        return this.props.children;
    }
};