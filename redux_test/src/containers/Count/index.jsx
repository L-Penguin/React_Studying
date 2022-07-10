import React, { Component } from 'react';
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
// 引入action
import {
    increment, 
    decrement, 
    incrementAsync
} from '../../redux/actions/count'
import './index.css';

// 定义UI组件
class Count extends Component {
    state = {
        carName: "奔驰",
    }

    // 加法
    increment = ()=> {
        const {value} = this.select;
        this.props.increment(value*1);    
    }
    // 减法
    decrement = ()=> {
        const {value} = this.select;
        this.props.decrement(value*1);   
    }
    // 奇数加
    incrementIfOdd = ()=> {
        const {value} = this.select;
        if (this.props.count % 2 === 1) {
            this.props.increment(value*1);
        }
    }
    // 异步加
    incrementAsync = ()=> {
        const {value} = this.select;
        this.props.incrementAsync(value*1, 1000);
    }

  render() {
    // console.log("UI组件接收到的props是: ", this.props);
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为: {this.props.count}</h4>
        <select ref={c=> this.select=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
        <h4>Person组件人数为{this.props.personNum}</h4>
      </div>
    )
  }
}

// 使用connect()()创建并暴露Count的容器组件
export default connect(
    state=> ({count: state.count, personNum: state.personArr.length}),  // 映射状态
    // mapDispatchToProps的简写
    // 映射操作状态的方法
    {increment,decrement,incrementAsync,}
)(Count);


