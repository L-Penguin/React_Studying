import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  // 前进按钮的回调
  forward = ()=> {
    this.props.history.goForward();
  }

  // 后退按钮的回调
  back = ()=> {
    this.props.history.goBack();
  }

  // 前进2步按钮的回调
  go = ()=> {
    this.props.history.go(-2);
  }

  render() {
    console.log("Header", this.props);
    return (
      <div>
        <h2>React Router Demo</h2>
        &nbsp;<button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>go</button>
      </div>
    )
  }
}

export default withRouter(Header);

// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
