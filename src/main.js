// Bootstraping
// Put react app in browser

import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app/App';

// Real DOM, Virtual DOM both come here
ReactDOM.render(React.createElement(App), // Virtual DOM
                document.getElementById('root') // Real DOM
);