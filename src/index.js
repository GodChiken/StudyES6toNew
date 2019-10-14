import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tutorial from './component/Tutorial';
import TickTock from './component/TickTok';
import Welcome from "./component/props";
import WelcomeContainer from "./component/componentCombine";
import Clock from "./component/Clock";

ReactDOM.render(<Tutorial />, document.getElementById('tutorial'));
ReactDOM.render(<Welcome name="Bo-Hun"/>,document.getElementById('tick'));
ReactDOM.render(<WelcomeContainer/>,document.getElementById('combineComponent'));
ReactDOM.render(<Clock/>,document.getElementById('Clock'));
