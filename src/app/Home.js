import React from 'react';

// Click & Keypress Events
// state, forceUpdate and setState

export default class Home extends React.Component {

    constructor() {
        super(); // Must

        // state is a keyword.
        // Initializable and mutable
        this.state = {
            counter: 100
        }
    }

    increment(e) {

        // BAD, as it is mutable state (Not recommended)
        //this.state.counter++;
        console.log("Before Counter: ", this.state.counter);

        // Force Update, Trigger React to Call render
        // BAD
        // this.forceUpdate();

        // BEST PRACTICE
        // Call Render
        // Async Call, hence old value is visible in the After Counter as shown below
        this.setState({
            counter: this.state.counter + 1
        });

        console.log("After Counter: ", this.state.counter);
    }

    render() {

        console.log("Home Render ");

        return (
            <div>
                <h2>Home Page</h2>
                <p>Counter {this.state.counter}</p>
                <button onClick={() => this.increment()}>
                    Click me!
                </button>
            </div>
        );
    }
}