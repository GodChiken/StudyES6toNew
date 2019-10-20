import React, {Component} from 'react'
import FormattedDate from './FormattedDate'
class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()}; // render() 에 사용될 것이 아니라면 사용하지 않아야 한다.
    }
    // life cycle hook
    // 컴포넌트에 마운팅할 이벤트 설정
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // life cycle hook
    // 컨포넌트에 언마운팅해야할 것들 정의
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello Clock</h1>
                <FormattedDate date ={this.state.date}/>
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