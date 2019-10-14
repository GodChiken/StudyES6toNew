import React, {Component} from 'react'

class Clock extends Component{

    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello Clock</h1>
                <h2>{this.state.date.toLocaleString()}</h2>
            </div>
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}
export default Clock;