import React, {useCallback, useEffect, useRef, memo} from 'react';
import { CLICK_CELL } from './TicTacToe';

const Td =  memo( ( {rowIndex, cellIndex, dispatch, cellData} ) => {  
    console.log('td Rendered');

    const ref = useRef([]);

    useEffect( () => {
        console.log(rowIndex === ref.current[0],  cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
        ref.current = [rowIndex, cellIndex, dispatch, cellData];
    }, [rowIndex, cellIndex, dispatch, cellData]);


    // 칸을 클릭 했을 때 행번호와, 칸 번호를 보낸다.
    const onClickTd = useCallback( () => {
        if(cellData) return;
         dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex  });
    }, [cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    );
});

export default Td;