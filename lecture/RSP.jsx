import React, { Component } from 'react';

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

/**
 * 이겼을 때
 * 바위 0   가위 -142
 * 가위 -142    보 -284
 * 보 -284  바위 0
 * 
 * 졌을 때
 * 바위 0   보 -284
 * 가위 -142    바위 0
 * 보 -284  가위 -142
 * 
 * 비겼을 때: 서로 좌표값이 같을 때
 * 
 **/

/*
 * 이겼을 때
 * 바위 0   가위 1
 * 가위 1    보 -1
 * 보 -1  바위 0
 * 
 * 졌을 때
 * 바위 0   보 -1
 * 가위 1    바위 0
 * 보 -1  가위 1
 * 
 * 비겼을 때: 서로 좌표값이 같을 때
 * 
 */ 


class RSP extends Component {
   
    // 초기상태값
    state = {
        result: '',   // 결과
        imgCoord: 0, // 현재 이미지좌표 값
        score: 0,    // 점수
    };

    interval;

    componentDidMount() { // 컴포넌트가 첫 렌더링 된 후
       
        this.interval = setInterval( () => {
            // console.log('hi');
            const {imgCoord} = this.state;
            
            // console.log('imgCoord', typeof imgCoord, ', ', typeof rspCoords.바위);
            // console.log('rspCoords', rspCoords.바위);
            // console.log('rspCoords', rspCoords.가위);
            // console.log('rspCoords', rspCoords.보);

            if(imgCoord === rspCoords.바위) {
                this.setState({
                    imgCoord: rspCoords.가위,
                });
            } else if(imgCoord === rspCoords.가위) {
                this.setState({
                    imgCoord: rspCoords.보,
                });
            } else if(imgCoord === rspCoords.보) {
                this.setState({
                    imgCoord: rspCoords.바위,
                });                
            }

        }, 1000);
    }

    componentDidUpdate() { // 리렌더링 후

    };

    componentWillUnmount() { // 컴포넌트가 제거되기 직전
        clearInterval(this.interval);
    };

    onClickBtn = (choice) => {
        const { imgCoord } = this.state;

        // console.log('choice 값', choice);
        // console.log('버튼1: ', rspCoords[choice]); // 내가 누른 좌표
        // console.log('imgCoord: ', imgCoord); // 컴퓨터 랜덤 좌표

        let myHand = rspCoords[choice];

        // 이겼을 때

        if(myHand === 0 && imgCoord === '-142px' || myHand === '-142px' && imgCoord === '-284px' || myHand === '-284px' && imgCoord === 0) {
            console.log('이겨따!!!!');
        }

        // 졌을 떄

        // 비겼을 때
        

    };

    render() {
        const { result, imgCoord, score } = this.state

        return (
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord}, 0` }}>
                </div>   
                <div>
                    <button id="rock" className="btn" onClick={ () => this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={ () => this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={ () => this.onClickBtn('보')}>보</button>
                    <div>{result}</div>
                    <div>현재: {score} 점</div>
                    {/* <button id="replay">다시하기</button>
                    <button id="stop">멈춤</button> */}
                </div>
            </>
        );
    }
}

export default RSP;