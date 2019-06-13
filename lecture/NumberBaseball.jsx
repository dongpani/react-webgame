import React, { Component } from 'react';
import Try from './Try';

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

    fruits = [
       // 객체 (반복문)
       { fruit: '사과', taste: '마시따'},
       { fruit: '포도', taste: '마시따'},
       { fruit: '딸기', taste: '마시따'},
       { fruit: '귤', taste: '마시따'},
       { fruit: '바나나', taste: '마시따'},
       { fruit: '참외', taste: '마시따'},
       { fruit: '배', taste: '마시따'},
       { fruit: '배', taste: '맛없다.'},
     ];


    render() {
        return (
           <>
             <h1> {this.state.result} </h1>
             <form onSubmit={this.onSubmitForm}>
                <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
             </form>
             <div>시도: {this.state.tries.length}</div>
             <ul>
                 {this.fruits.map((v) => {
                    return (
                        <Try key={v.fruit + v.taste} value={v} />
                    );
                 })}
             </ul>
           </>
        );     
    }
}

export default NumberBaseball;