import React, { Component } from 'react';


class ResponseCheck extends Component {

    state = {
        state: 'waiting', 
        message: '클릭해서 시작하세요.',
        result: [],
   }

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        const { state, message, result} = this.state;

        // console.log('state', state);

        if(state === 'waiting') {
            console.log('state1: ', state);

            this.setState({
                state: 'ready', 
                message: '초록색이 되면 클릭하세요.',
            });

            this.timeout = setTimeout( () => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭',
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready') {
            console.log('state2: ', state);
            this.setState({
                state: 'waiting', 
                message: '성급하셨군요. 기다렸다가 클릭하세요.',
            });

            clearTimeout(this.timeout);

        } else if (state === 'now') {
            console.log('state3: ', state);
            
            this.endTime = new Date();

            console.log('시간차이:', this.endTime - this.startTime);

            this.setState( (prevState) => {
                return {
                    state: 'waiting', 
                    message: '클릭해서 시작하세요.',
                    result: [...prevState.result, this.endTime - this.startTime],
                }
            });

            // console.log('result: ', result);

        }
    };

    renderAverge = () => {
        // console.log('렌더링 되냐??');
        const { result } = this.state;
        return result.length === 0 ? null : <> <div> 평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div> </>
    };

    // 리셋 버튼 만들기.
    resetBtn = () => {
        const { result } = this.state;

        this.setState({
            result : '',
        });
    };

    render() {
        const {state, message, result} = this.state;
        return (
            <>
                <div id="screen" className={state} onClick={this.onClickScreen}>
                  {message}
                </div>
                {this.renderAverge()}
                <button onClick={this.resetBtn} >리셋</button>
                
                {result + ' '}
            </>
        )
    }
}


export default ResponseCheck;