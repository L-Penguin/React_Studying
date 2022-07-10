import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            {id: "01", title: "消息1"},
            {id: "02", title: "消息2"},
            {id: "03", title: "消息3"},
        ]
    }

    // push查看的回调
    pushShow = (message)=> {
        // push跳转+携带params参数
        // this.props.history.push(`/home/message/detail/${message.id}/${message.title}`)

        // push跳转+携带search参数
        // this.props.history.push(`/home/message/detail?id=${message.id}&title=${message.title}`)

        // push跳转+携带state参数
        this.props.history.push("/home/message/detail", {id: message.id, title: message.title})
    }

    // replace查看的回调
    replaceShow = (message)=> {
        // replace跳转+携带params参数
        // this.props.history.replace(`/home/message/detail/${message.id}/${message.title}`)

        // replace跳转+携带search参数
        // this.props.history.replace(`/home/message/detail?id=${message.id}&title=${message.title}`)

        // replace跳转+携带state参数
        this.props.history.replace("/home/message/detail", {id: message.id, title: message.title})
    }

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
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map(message=> {
                            return (
                            <li key={message.id}>
                                {/* 向路由组件传递params参数 */}
                                {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> */}
                                

                                {/* 向路由组件传递search参数 */}
                                {/* <Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}

                                {/* 向路由组件传递state参数 */}
                                {/* react-router-dom@5.3.3中使用state时，为replace方法 */}
                                <Link to={{pathname: '/home/message/detail', state: {id: message.id, title: message.title}}}>{message.title}</Link>

                                &nbsp;<button onClick={()=>{this.pushShow(message)}}>push查看</button>&nbsp;
                                <button onClick={()=>{this.replaceShow(message)}}>replace查看</button>
                            </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

                {/* search参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail}/> */}

                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail}/>
                &nbsp;<button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>go</button>
            </div>
            
            
        )
    }
}
