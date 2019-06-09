const React = require('react');
const { Component } = React;

const GuGuDan = () => {
    // react Hooks
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null); // DOM 에 직접 접근할 때

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        if(Number(value) === first * second )  { // 입력한 value 와 first * second 가 같으면 ? 
            setResult((prevResult) => {
                return value;
            });

            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        } else {
            setResult('틀렸습니다.');
            inputRef.current.focus();
        }
    };

    return (
              <React.Fragment> 
                <div> {first} 곱하기 {second} 는? </div>
                <form onSubmit={onSubmitForm} >
                    <input ref={inputRef}  type="number" value={value} onChange={onChangeInput} />
                    <button> 입력  </button>
                </form>
                <div> 결과 : {result} </div>
              </React.Fragment>
           );
};

module.exports = GuGuDan;