import React, {useReducer} from 'react';
import Form from './Form';

const initialState = {
    tableData : [],
    timer: 0,
    timer: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

const MineSearch = () => {  
    const [state, dispatch] = useReducer(reducer, initialState);
    const {tableData, timer, result} = state;

    return (
        <>
            <Form />
            <div>{timer}</div>
            <div>{result}</div>
        </>
    );
}

export default MineSearch;