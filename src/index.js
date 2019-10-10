import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tutorial from './component/Tutorial';
import TickTock from './component/TickTok';

ReactDOM.render(<Tutorial />, document.getElementById('tutorial'));
ReactDOM.render(<TickTock />, document.getElementById('tick'));
ReactDOM.render(<App />, document.getElementById('root'));