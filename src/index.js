import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloReact from './component/tutorial';

ReactDOM.render(<HelloReact />, document.getElementById('tutorial'));
ReactDOM.render(<App />, document.getElementById('root'));