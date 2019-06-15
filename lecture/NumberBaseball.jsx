import React, { useState } from 'react';
import Try from './Try';

function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i=0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

// class NumberBaseball extends Component {
const NumberBaseball = () => {   
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        
        if(value === answer.join('')) { // 입력한 숫자와 랜덤으로 뽑힌 숫자가 완전히 같으면 -> 홈런
            setResult('홈런');
            setTries( (prevTries) => {
                return [...prevTries, { try: value, result: '홈런!'}]
            });

            alert('게임을 다시 시작합니다!');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
            
        } else {
            const answerArray = value.split('').map((v) => parseInt(v)); // 입력된 값들을 숫자로 바꿈.
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9) { // 10번 이상 틀렸을 때
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`);

                alert('게임을 다시 시작합니다!');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else { 
                for(let i=0; i < 4; i +=1) {
                    if(answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if(answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }

                setTries( (prevTries) => {
                    return [...prevTries, {try: value,  result: `${strike} 스트라이크, ${ball} 볼입니다.`}]
                });
                setValue('');

            }
        }

    };
    
    const onChangeInput = (e) =>  {
        e.preventDefault();

        console.log('답: ', answer);
        setValue(e.target.value);

    };    

    return (
        <>
            <h1> {result} </h1>
            <form onSubmit={onSubmitForm}>
            <input maxLength={4} value={value} onChange={onChangeInput} />
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try key={`${i + 1}차 시도: `} tryInfo={v}  />
                    );
                })}
            </ul>
        </>
    );     
    
}

export default NumberBaseball;