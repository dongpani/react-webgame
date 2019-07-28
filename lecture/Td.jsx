import React, {useCallback} from 'react';
import { CLICK_CELL } from './TicTacToe';

const Td = ( {rowIndex, cellIndex, dispatch, cellData} ) => {  

    // 칸을 클릭 했을 때 행번호와, 칸 번호를 보낸다.
    const onClickTd = useCallback( () => {
        if(cellData) return;

        console.log(rowIndex, cellIndex);
         dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex  });         
    }, [cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    );
};

export default Td;