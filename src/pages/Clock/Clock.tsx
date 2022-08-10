import { Component } from "react";
type StateType = {
    date: Date;
};
type propType = {
};
// interface Clock {
//   state: StateType;
//   props:propType
// }
class Clock extends Component<propType, StateType> {

    constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    tick = () => {
        this.setState({ date: new Date() })
    }

    render() {
        const tick = this.tick
        setInterval(tick, 1000);
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;
