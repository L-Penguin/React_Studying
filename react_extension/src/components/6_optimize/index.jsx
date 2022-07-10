import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
    state = {carName: '奔驰'};

    changeCar = ()=> {
        this.setState({carName: '迈巴赫'})
        /* const obj = this.state;
        obj.carName = "迈巴赫"
        this.setState(obj) */
    }

    // 接收加下来变化的props和state
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props, this.state);
        console.log(nextProps, nextState);
        if (this.state.carName === nextState.carName) return false;
        else return true;
    } */

    render() {
        console.log("Parent---render");
        const {carName} = this.state;
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <span>我的车名字: {carName}</span><br />
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName="奥拓"/>
            </div>
        )
    }
}

class Child extends PureComponent {

    // 接收加下来变化的props和state
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props, this.state);
        console.log(nextProps, nextState);
        if (this.props.carName === nextProps.carName) return false;
        else return true;
    } */

    render() {
        console.log("Child---render")
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>{this.props.carName}</span>
            </div>
        )
    }
  }
