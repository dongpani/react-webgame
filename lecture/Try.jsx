import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li> 
                <b> {this.props.value.fruit} </b> - {this.props.value.taste}
            </li>
        );
    }
}

export default Try;