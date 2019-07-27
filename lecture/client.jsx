import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import ClientView from './TicTacToe';

const Hot = hot(ClientView);

ReactDom.render(<Hot />, document.querySelector('#root'));