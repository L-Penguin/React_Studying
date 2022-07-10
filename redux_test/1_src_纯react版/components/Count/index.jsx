import React, { Component } from 'react'
import './index.css';

export default class Count extends Component {
    state = {
        count: 0,
    }

    // 加法
    increment = ()=> {
        const {value} = this.select;
        const {count} = this.state;
        this.setState({count: count+value*1});
    }
    // 减法
    decrement = ()=> {
        const {value} = this.select;
        const {count} = this.state;
        this.setState({count: count-value*1});
    }
    // 奇数加
    incrementIfOdd = ()=> {
        const {value} = this.select;
        const {count} = this.state;
        if (count % 2 === 1) {
            this.setState({count: count+value*1});
        }  
    }
    // 异步加
    incrementAsync = ()=> {
        setTimeout(()=> {
            const {value} = this.select;
            const {count} = this.state;
            this.setState({count: count+value*1});
        }, 1000)
    }


  render() {
    return (
      <div>
        <h1>当前求和为: {this.state.count}</h1>
        <select ref={c=> this.select=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
