import React, { useState, useRef} from 'react';

const ResponseCheck_hooks = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);

    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = (e) => {
        e.preventDefault();

        if(state === 'waiting') {
            console.log('this is waiting');

            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');

            timeout.current = setTimeout( () => {
                setState('now');
                setMessage('지금 클릭.');

                startTime.current = new Date();

                // console.log('이거슨 스타트타임=', startTime);
            }, Math.floor(Math.random() * 1000) + 2000);

        } else if (state === 'ready') {
            console.log('this is ready');

            setState('waiting');
            setMessage('성급하셨군요. 기다렸다가 클릭하세요.');

            clearTimeout(timeout.current);

        } else if (state === 'now') {
            console.log('this is now');
            
            endTime.current = new Date();

            console.log('시간차이:', endTime.current - startTime.current);

            setMessage( (prevMessage) => {
                return '클릭해서 시작하세요.';
            });

            setMessage( (prevMessage) => {
                return '클릭해서 시작하세요.';
            });

            setResult( (prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });

        }        
    };

    const renderAverge = () => {
        return result.length === 0 ? null : <> <div> 평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div> </>
    };

    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen} >
                {message}
            </div>
            {renderAverge()}
        </>
    );

};

export default ResponseCheck_hooks;