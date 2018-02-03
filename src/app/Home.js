import React from 'react';

// Click & Keypress Events
// state, forceUpdate and setState

export default class Home extends React.Component {

    constructor() {
        super(); // Must

        // state is a keyword.
        // Initializable and mutable
        this.state = {
            counter: 100,
            name: 'Enter name',
            frameworks: ['React','Redux'],
            show: true
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

    onNameChange(e) {
        // Target is Real DOM element
        let target = e.target;
        console.log("Value is", target.value);
        this.setState({
            name: target.value
        });
    }

    onAdd() {
        //BAD: Mutable 
        //this.state.frameworks.push(this.state.name);

        //GOOD: Immutable
        this.setState({
            frameworks: [...this.state.frameworks, this.state.name]
        });

    }

    toggle() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {

        console.log("Home Render ");

        return (
            <div>
                <h2>Home Page</h2>
                <p>Counter {this.state.counter}</p>
                <button onClick={(e) => this.increment(e)}>
                    Click me!
                </button>

                <input value={this.state.name} onChange={(e) => this.onNameChange(e)} />

                <button onClick={() => this.onAdd()}>
                    Add
                </button>

                <button onClick={() => this.toggle()}>
                    {this.state.show ? 'Hide' : 'Show'}
                </button>

                {   this.state.show && 
                    <ul>
                        {
                            this.state.frameworks.map(name => (
                                <li key={name}>{name}</li>
                            ))
                        }

                    </ul>
                }
            </div>
        );
    }
}