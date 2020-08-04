import React from 'react';
//import Counter from '../counter';
import Counter  from '../Counter';
import { connect } from 'react-redux';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
       
        console.log(this.props);
        this.state = { size: 0, clearValue: 0 };
    }

    handleResize = (event) => {
        let reSizes = event.target.value;
        if (reSizes !== this.state.size) {
            this.setState({
                size: reSizes ? parseInt(reSizes) : 0,
                clearValue: 1
            })
        }
    }


    render() {
        const initArr = [...Array(this.state.size).keys()];
        return <div>
            <div>
                <label>Group Size:</label>
                <input onBlur={this.handleResize} defaultValue={0} /><br />
                <label>totalValue: {this.props.sum}</label>
            </div>
            {
                initArr.map(key => <Counter key={key} clearValue={this.state.clearValue}  />)
            }
        </div>
    }

    //onIncrease={this.totalIncrease} onDecrease={this.totalDecrease}

    // totalIncrease = () => {
    //     this.setState((prevState) => ({
    //         clearValue: 0
    //     }));
    // }
    // totalDecrease = () => {
    //     this.setState((prevState) => {
    //         return ({
    //             clearValue: 0
    //         });
    //     });
    // }
}

const mapStateToProps = state => {
    console.log("ccc"+state);

    return { sum: state,a:1 }
}
export default connect(mapStateToProps)(CounterGroup);