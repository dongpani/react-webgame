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

// 좌표값으로 key 값을 반환
const cpuChoice = (cpuChoiceRSP) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === cpuChoiceRSP;
    })[0];
};


class RSP extends Component {

    // 초기상태값
    state = {
        result: '',   // 결과
        imgCoord: 0, // 현재 이미지좌표 값
        score: 0,    // 점수
    };

    interval;

    changeRSP = () => {
        const {imgCoord} = this.state;
        
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
    };    

    componentDidMount() { // 컴포넌트가 첫 렌더링 된 후      
        this.interval = setInterval(this.changeRSP, 1000);
    }

    componentDidUpdate() { // 리렌더링 후

    };

    componentWillUnmount() { // 컴포넌트가 제거되기 직전
        clearInterval(this.interval);
    };

    onClickBtn = (choice) => {
        const { imgCoord, score, result} = this.state; // 컴퓨터의 좌표값
        let myScore = scores[choice];  // 나의 스코어를 가져옴.
        let cpuScore = scores[cpuChoice(imgCoord)];

        clearInterval(this.interval);
      
        // 이겼을 떄
        if([2, -1].includes(myScore - cpuScore)) {
            this.setState( (prevState) => {
                // console.log('status :', prevState);
                return {
                    score: prevState.score + 1,
                    result: '이겨따!!',
                }
            });

            // this.setState
        } else if([1, -2].includes(myScore - cpuScore)) {  // 졌을 때
            this.setState( (prevState) => {
                return {
                    score: prevState.score - 1,
                    result: '졌다...졌다!!!!!',
                }
            });

        } else if(myScore === cpuScore) {
            this.setState({
                result: '한번 더!!!!',
            });
        }

        setTimeout(() => {
            this.interval = setInterval(this.changeRSP, 1000);
        }, 2000);
        
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
                    <div>게임 결과: {result}</div>
                    <div>현재: {score} 점</div>
                </div>
            </>
        );
    }
}

export default RSP;