import React from 'react';

// DEFAULT IMPORT
import Header from './Header';
import Footer from './Footer';
import Home from './Home'

export class App extends React.Component {

    render() {
        return (
            <div>
                <h1>React App</h1>
                <Header title="Welcome"/>
                <Home />
                <Footer year="2018" company="Google"/>
            </div>
        );
    }
}