import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tutorial from './component/Tutorial';
import TickTock from './component/TickTok';
import Welcome from "./component/props";

ReactDOM.render(<Tutorial />, document.getElementById('tutorial'));
ReactDOM.render(<Welcome name="Bo-Hun"/>,document.getElementById('tick'));
ReactDOM.render(<App />, document.getElementById('root'));