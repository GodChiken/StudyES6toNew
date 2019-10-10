import React from "react";
import ReactDOM from "react-dom";

function TickTock() {
    const element = (
        <div>
            <h1>Hello, TickTock</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element,document.getElementById('tick'));
    return element;
}
setInterval(TickTock, 1000);
export default TickTock;