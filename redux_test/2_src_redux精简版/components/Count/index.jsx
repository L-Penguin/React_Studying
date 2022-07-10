import React, { Component } from 'react';
// 引入store，用于获取redux中保存状态
import store from '../../redux/store'
import './index.css';

export default class Count extends Component {
    state = {
        carName: "奔驰",
    }

    /* componentDidMount() {
        // 检测redux中状态的变化，只要变化，就调用render
        store.subscribe(()=> {
            this.setState({});
        })
    } */

    // 加法
    increment = ()=> {
        const {value} = this.select;
        store.dispatch({type: 'increment', data: value*1});
    }
    // 减法
    decrement = ()=> {
        const {value} = this.select;
        store.dispatch({type: 'decrement', data: value*1})
    }
    // 奇数加
    incrementIfOdd = ()=> {
        const {value} = this.select;
        if (store.getState() % 2 === 1) {
            store.dispatch({type: 'increment', data: value*1});
        }  
    }
    // 异步加
    incrementAsync = ()=> {
        setTimeout(()=> {
            const {value} = this.select;
            store.dispatch({type: 'increment', data: value*1});
        }, 1000)
    }

  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
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
