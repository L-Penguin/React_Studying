import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {

  render() {
    const {users, isFirst, isLoading, err} = this.props;
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
