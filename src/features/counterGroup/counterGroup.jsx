import React from 'react';
//import Counter from '../counter';
import { Counter } from '../counter/Counter';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { size: 0, totalValue: 0 ,clearValue : 0};
    }

    handleResize = (event) => {
        let reSizes = event.target.value;
        if(reSizes != this.state.size){
            this.setState({
                size: reSizes ? parseInt(reSizes) : 0,
                totalValue: 0,
                clearValue : 1
            })
        }

    }



    render() {
        const initArr = [...Array(this.state.size).keys()];
        return <div>
            <div>
                <label>Group Size:</label>
                <input onBlur={this.handleResize} defaultValue={0} /><br />
                <label>totalValue: {this.state.totalValue}</label>
            </div>
            {
                initArr.map(key => <Counter key={key}  clearValue={this.state.clearValue} onIncrease={this.totalIncrease} onDecrease={this.totalDecrease} />)
            }
        </div>
    }
    totalIncrease = () => {
        this.setState((prevState) => ({
            totalValue: prevState.totalValue + 1,
            clearValue : 0
        }));
    }
    totalDecrease = () => {
        this.setState((prevState) => ({
            totalValue: prevState.totalValue - 1,
            clearValue : 0
        }));
    }
}
export default CounterGroup;