import React from 'react';
import { connect } from 'react-redux'


class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 }
    }
    render() {
        return <div>
            <button onClick={this.decrease}>-</button>
            <span>{this.state.value}</span>
            <button onClick={this.increase}>+</button>
        </div>
    }
    // static getDerivedStateFromProps(props, state) {
    //     if (props.clearValue === 1) {
    //         state.value = 0;
    //     }
    // }

    increase = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }));
        this.props.increase()
    }

    decrease = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }));
        this.props.decrease();
        console.log(this.props.state);
    }

}

const mapDispatchToProps = (dispatch) => ({
    increase: () => dispatch({ type: 'INCREASE' }),
    decrease: () => dispatch({ type: 'DECREASE' })
});
export default connect(null ,mapDispatchToProps)(Counter);