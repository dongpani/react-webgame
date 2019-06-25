import React, { Component } from 'react';

class RSP extends Component {
    state = {
        result: '',
        imgCard: 0,
        score: 0,
    };

    componentDidMount() { // 컴포넌트가 첫 렌더링 된 후

    }

    componentWillMount() { // 컴포넌트가 제거되기 직전

    }

    render() {
        return (
            <>
                <div id="computer" style={{ background: url('https://en.pimg.jp/023/182/267/1/23182267.jpg') ${imgCard}, 0; }}>
                </div>   
                <div>
                    <button id="rock" className="btn">바위</button>
                    <button id="scissor" className="btn">가위</button>
                    <button id="paper" className="btn">보</button>
                    <br/><br/>
                    {/* <button id="replay">다시하기</button>
                    <button id="stop">멈춤</button> */}
                </div>
            </>
        );
    }
}

export default RSP;