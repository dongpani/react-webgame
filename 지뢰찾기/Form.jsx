import React, {useState, useCallback, useContext, memo} from 'react';
import { TableContext, START_GAME } from './MineSearch';


const Form = memo (() => {  
    console.log('this is form');

    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);
    const { dispatch } = useContext(TableContext);

    const onChangeRow = useCallback((e) => {
        setRow(e.target.value);
    }, []);

    const onChangeCell = useCallback((e) => {
        setCell(e.target.value);
    }, []);
    
    const onChangeMine = useCallback((e) => {
        setMine(e.target.value);
    }, []);

    const onclickBtn = useCallback((e) => {
        e.preventDefault();  // 리렌더링 자꾸되서 막았는데.. 왜 그런지 모르게씀..

        console.log('콜백: ', row, cell, mine);
        dispatch({ type: START_GAME, row, cell, mine }); 
    }, [row, cell, mine]);

    return (
        <form>
            <div>
                <input type="number" placeholder="세로" value={row} onChange={onChangeRow} />
                <input type="number" placeholder="가로" value={cell} onChange={onChangeCell} />
                <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine} />
                <button onClick={onclickBtn}>시작</button>
            </div>
        </form>
    );
});

export default Form;