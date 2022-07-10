import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item'

export default class List extends Component {
  state = { // 初始化状态
    users: [],  // users初始值为数组
    isFirst: true,  //是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: '',  // 存储请求相关的错误信息 
  };

  componentDidMount() {
    this.token = PubSub.subscribe('updateState', (_, stateObj)=> {
      this.setState(stateObj);
    })
  }

  componentWillUnmount() {
    PubSub.unSubscribe(this.token);
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state;
    const newUsers = users.map(user=> {
      return {
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url
      }
    })
    return (
        <div className="row">
          {
            isFirst ? <h2>欢迎来到此页面，请在输入框输入内容搜索</h2> : 
            isLoading ? <h2>Loading......</h2> :
            err ? err : 
            newUsers.length ? newUsers.map(user=> {
              return <Item {...user} key={user.html_url}/>
            }) : <h2>搜索结果为空</h2> 
          }   
        </div>
    )
  }
}
