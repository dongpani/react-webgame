import React, { useState, useRef, useEffect } from 'react';

// 가위바위보 이미지 좌표
const rspCoords = {
    바위: 0,
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

// 좌표값으로 key 값을 반환
const cpuChoice = (cpuChoiceRSP) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === cpuChoiceRSP;
    })[0];
};


const RSP_hooks = () => { 
    // 초기상태값
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef(null);

    const changeRSP = () => { // 이미지 돌리기
        if(imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if(imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if(imgCoord === rspCoords.보) {      
            setImgCoord(rspCoords.바위);
        }
    };    

    useEffect(() => {
        interval.current = setInterval(changeRSP, 1000); // 컴포넌트가 첫 렌더링 된 후 componentDidMount

        return () => { // 컴포넌트가 제거되기 직전 componentWillUnmount
            clearInterval(interval.current);
        };

    }, [imgCoord]);

    const onClickBtn = (choice) => () => {
        let myScore = scores[choice];  // 나의 스코어를 가져옴.
        let cpuScore = scores[cpuChoice(imgCoord)];

        clearInterval(interval.current);
      
        // 이겼을 떄
        if([2, -1].includes(myScore - cpuScore)) {
            setScore( (prevScore) => prevScore + 1);
            setResult('이겨따!!');

        } else if([1, -2].includes(myScore - cpuScore)) {  // 졌을 때
            setScore( (prevScore) => prevScore - 1);
            setResult('졌다...졌다!!!!!');                

        } else if(myScore === cpuScore) { // 비겼을 때
            setResult('한번 더!!');
        }

        setTimeout(() => {
            interval.current = setInterval(changeRSP, 1000);
        }, 2000);
        
    };

    return (
        <>
            <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord}, 0` }}>
            </div>   
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
                <div>게임 결과: {result}</div>
                <div>현재: {score} 점</div>
            </div>
        </>
    );
    
}

export default RSP_hooks;