import React, { Component } from 'react';
import Ball from './Ball';

// 로또 추첨.
function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map( (v, i) => i + 1);
    const shuffle = [];

    while(candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }

    console.log('shuffle: ', shuffle);

    const bonusNumber  = shuffle[shuffle.length - 1];
    const winNumbers  = shuffle.splice(0, 6).sort( (c, p) => c - p );

    return [...winNumbers, bonusNumber];

};

class Lotto extends Component {
    state = {
        winNumbers: getWinNumbers(),
        winBalls:[],
        bonus: null,
        redo: false,
    };

    timouts = [];

    runTimeouts = () => {
        const { winNumbers } = this.state;

        // let 을 사용해  클로저 문제 해결.
        for (let i=0; i < this.state.winNumbers.length -1; i++) {
            this.timouts[i] = setTimeout( () => {
                this.setState( (prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, winNumbers[i]],
                    }                    
                });
            }, (i + 1) * 1000);
        }

        this.timouts[6] = setTimeout(() => {
            this.setState( {
                bonus: winNumbers[6],
                redo: true,
            });
        }, 7000);
    };

    componentDidMount() { // 컴포넌트가 첫 렌더링 된 후
        this.runTimeouts();
    };

    componentDidUpdate(prevProps, prevState) { // 컴포넌트가 변경되었을 때
      const { winBalls } = this.state;

         if (winBalls.length === 0) {
            this.runTimeouts();
         }
    };

    componentWillUnmount() { // 컴포넌트가 제거되기 직전
        this.timeout.forEach( (v) => {
            clearTimeout(v);
        });
    };

    onClickRedo = () => {
        this.setState({
            winNumbers: getWinNumbers(),
            winBalls:[],
            bonus: null,
            redo: false,
        });

        this.timouts = [];

    };

    render() {
        const { winBalls, bonus, redo } = this.state  // 구조분해
        return (
            <>
                <div>당첨 숫자</div>
                <div id="결과창">
                    { winBalls.map( (v) => <Ball key={v} number={v}  />)}
                </div>
                <div>보너스</div>
                {bonus && <Ball number={bonus} />}
                {redo && <button onClick={this.onClickRedo} >한번 더!!</button> }

            </>
        );
    }
}

export default Lotto;