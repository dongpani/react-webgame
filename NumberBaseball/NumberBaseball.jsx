import React, { Component } from 'react';

function getNumbers() {

};

class NumberBaseball extends Component {
    state = {
        result : '',
        value : '',
        answer: getNumbers(),
        tries: [],
    };
    
    onSubmitForm = () => {
    
    };
    
    onChangeInput = () => {
    
    };    


    render() {
        return (
           <>
             <h1> {this.state.result} </h1>
             <form onSubmit={this.onSubmitForm}>
                <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
             </form>
             <div>시도: {this.state.tries.length}</div>
             <ul>
                 {['like', 'like', 'like', 'like', 'like'].map(() => {
                    return (
                        <li>like</li>
                    );
                 })}
             </ul>
           </>
        );     
    }
}

export default NumberBaseball