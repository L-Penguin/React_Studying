import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import About from './pages/About' // About是路由组件
import Home from './pages/Home' // Home是路由组件
import Header from './components/Header'  // Header是一般组件
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><Header/></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className=="list-group-item active" href="./about.html">About</a>
              <a className=="list-group-item" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换 */}
              <MyNavLink to="/a/about">About</MyNavLink>
              <MyNavLink to="/a/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/a/about" component={About}/>
                  <Route path="/a/Home" component={Home}/>
                  <Route path="/a/Home" component={Test}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

