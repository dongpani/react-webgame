import React, { useContext } from 'react';
import Td from './Td';
import { TableContext } from './MineSearch';

const Tr = ({ rowIndex }) => {
    console.log('this is tr')

    const { tableData } = useContext(TableContext);

    return (
        <tr>
            {tableData[0] && Array(tableData[0].length).fill().map( (td, i) => <Td rowIndex={rowIndex} cellIndex={i} />)}
        </tr>
    );
};

export default Tr;