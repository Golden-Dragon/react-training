//bootstrapping
//put react app into browser
import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app/App';
//real dom
ReactDOM.render(React.createElement(App), //virtual dom
 document.getElementById('root')//real dom
)


