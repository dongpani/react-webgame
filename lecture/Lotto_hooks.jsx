import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

// 로또 추첨.
function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map( (v, i) => i + 1);
    const shuffle = [];

    while(candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }

    //console.log('shuffle: ', shuffle);

    const bonusNumber  = shuffle[shuffle.length - 1];
    const winNumbers  = shuffle.splice(0, 6).sort( (c, p) => c - p );

    return [...winNumbers, bonusNumber];

};

// class Lotto_hooks extends Component {
const Lotto_hooks = () => {
    const lottoNumbers = useMemo( () => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);

    const timeout = useRef([]);

    const runTimeouts = () => {
        // let 을 사용해  클로저 문제 해결.
        for (let i=0; i < winNumbers.length -1; i++) {
            timeout.current[i] = setTimeout( () => {
                setWinBalls( (prevWinBalls) => {
                    return [...prevWinBalls, winNumbers[i]];
                });

            }, (i + 1) * 1000);
        }

        timeout.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);

        }, 7000);
    };

    useEffect(() => {
        runTimeouts();

        return () => {
            timeout.current.forEach( (v) => {
                clearTimeout(v);
            });            
        }

    }, [timeout.current]);

    const onClickRedo = useCallback( () => {
        console.log('onClickRedo');
        console.log('winNumbers : ', winNumbers);

        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);

        timeout.current = [];

    }, [winNumbers]);

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                { winBalls.map( (v) => <Ball key={v} number={v}  />)}
            </div>
            <div>보너스</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo} >한번 더!!</button> }
        </>
    );
    
}

export default Lotto_hooks;