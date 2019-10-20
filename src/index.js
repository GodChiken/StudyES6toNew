import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Tutorial from './component/Tutorial';
import TickTock from './component/TickTok';
import Welcome from "./component/props";
import WelcomeContainer from "./component/componentCombine";
import Clock from "./component/Clock";
import Toggle from "./component/Toggle";
import CollectionExample from "./component/CollectionExample";

render(<Tutorial/>, document.getElementById('tutorial'));
render(<Welcome name="Bo-Hun"/>, document.getElementById('tick'));
render(<WelcomeContainer/>, document.getElementById('combineComponent'));
render(<Clock/>, document.getElementById('Clock'));
render(<Toggle/>, document.getElementById('toggle'));
render(<CollectionExample/>, document.getElementById('collectionExample'));
