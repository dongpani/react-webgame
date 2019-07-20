import React, { memo } from 'react';

// hooks가 아닌 함수로 부모컴포넌트에서 props 를 받음.
const Ball = memo(({number}) =>  {

        let background;
        if(number <= 10) {
            if(number <= 10) {
                background = 'red';
            } else if(number >= 11 && number <= 20) {
                background = 'orange';
            } else if(number >= 21 && number <= 30) {
                background = 'yellow';
            } else if(number <= 40){
                background = 'blue';
            } else {
                background = 'green';
            }
        }

        return (
            <div className="ball" style={{ background }}> {number} </div>
        );    
});

export default Ball;