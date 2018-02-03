import React from 'react';

//default import
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

import Cart from "./cart/components/Cart";

export class App extends React.Component {

    // create virtual dom, return 
    render() {
        //JSX JavaScript + XML
        return (
           <div>
                <h1>React App</h1>

                <Header title="React App" />

                <Cart />

                <Home />

                <Footer year="2018" 
                      company="React App"
                      address= { {pincode: 560000} }
                      
                >
                    <p>Contact us: 9:5 PM</p>
                </Footer>

            </div>
        )
    }
}
    
