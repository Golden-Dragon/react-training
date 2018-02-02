import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <hr />
            </div>
        );
    }
}