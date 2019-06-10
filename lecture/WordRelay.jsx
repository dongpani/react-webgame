const React = require('react');
const { Component } = React;

// class WordRelay extends React.Component {
const WordRelay = () => {
    const [word, setWord] = React.useState('제로초');
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null); // DOM 에 직접 접근할 때

    const onSubmitForm = (e) => {
        e.preventDefault();

        console.log('word', word);
        console.log('value', value);

        if(word[word.length - 1] === value[0] ) {
            setResult('딩동댕');
            setWord(value);
            setValue('');

            // this.input.focus();
            inputRef.current.focus();

        } else {
           setResult('땡');
           setValue('');
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button>입력!! (hooks)</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelay;