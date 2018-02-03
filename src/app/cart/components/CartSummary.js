
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends Component {
    constructor(props) {
        super(props);
    }
    
    //TODO: componentWillReceiveProps
    //TODO: shouldComponentUpdate
    componentDidMount() {
        
    }
    
    render() {
        console.log("CartSummary Render");
        
        return (
            <div> 
            <h2>Cart Summary</h2>


            <p> Amount {this.props.amount} </p>
            <p> Count {this.props.count} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}