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
                 {[
                     // 2차원 배열 (반복문)
                     // ['사과', '마시따'], ['바나나', '똥나옴'], ['포도', '달어'], ['귤', '귀차늠'], ['감', '안머금'], ['배', '흐어'], ['밤', '몰라!']

                    // 객체 (반복문)
                    { fruit: '사과', taste: '마시따'},
                    { fruit: '포도', taste: '마시따'},
                    { fruit: '딸기', taste: '마시따'},
                    { fruit: '귤', taste: '마시따'},
                    { fruit: '바나나', taste: '마시따'},
                    { fruit: '참외', taste: '마시따'},
                    { fruit: '배', taste: '마시따'},
                    { fruit: '배', taste: '맛없다.'},

                  ].map((v) => {
                    return (
                        <li key={v.fruit + v.taste}> <b>{v.fruit}</b> - {v.taste}</li>
                    );
                 })}
             </ul>
           </>
        );     
    }
}

export default NumberBaseball;