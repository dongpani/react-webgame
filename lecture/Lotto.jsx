import React, { Component } from 'react';

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


    componentDidMount() { // 컴포넌트가 첫 렌더링 된 후
    };

    componentDidUpdate() { // 리렌더링 후
    };

    componentWillUnmount() { // 컴포넌트가 제거되기 직전
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
                <button onClick={redo ? this.onClickRedo : () => {}}>한 번 더!</button>
            </>
        );
    }
}

export default Lotto;