import React, {useState, useReducer, useCallback, useEffect} from 'react';
import Table from './Table';

const initialState = {
    winner: '',
    turn: 'O',
    tableData : [ 
                    ['','',''],
                    ['','',''],
                    ['','',''],
                ],
    recentCell: [-1, -1], 
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
    switch( action.type) {
        case SET_WINNER : 
            return {
                ...state, 
                winner: action.winner,
            };
            
        case CLICK_CELL : {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];           
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData,
                recentCell : [action.row, action.cell],
            };
        }
        
        case CHANGE_TURN : {
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O',
            };
        }

        case RESET_GAME : {
            return {
                ...state,
                winner: '',
                turn: 'O',
                tableData : [ 
                                ['','',''],
                                ['','',''],
                                ['','',''],
                            ],
                recentCell: [-1, -1],                 
            };
        };

        default : 
            return state;

    }
};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {tableData, turn, winner, recentCell} = state;

    useEffect( () => {
        const [row, cell] = recentCell;

        if(row < 0)  return;

        let win = false;
        console.log('tableDataRecent: ', tableData[row][cell]);
        console.log('turn: ', turn);
 
        // 가로줄 검사

        if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        }
        // 새로줄 검사
        if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        }        
        // 대각선 검사 1
        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        }
        // 대각선 검사 2
        if(tableData[2][0] === turn && tableData[1][1] === turn && tableData[0][2] === turn) {
            win = true;
        }
    
        if(win) {
            alert('이겨따');
            dispatch({ type: SET_WINNER, winner: turn });
            dispatch({ type: RESET_GAME });
            
        }else {
            let all = true;
            tableData.forEach( (row) => {
                row.forEach( (cell) => {
                    if(!cell) {
                        all = false;
                    }
                });
            });

            if(all) {
                console.log('무승부입니다.');
            } else {
                dispatch({ type: CHANGE_TURN });
            }
        }
       
    }, [recentCell] );

    return (
        <>           
            <Table tableData={tableData} dispatch={dispatch}  />
            {winner && <div>{winner}님의 승리</div>}
        </>
    );
}

export default TicTacToe;