import React, { Component } from 'react'

export default class News extends Component {
    // 两秒后跳转路由
    /* componentDidMount() {
        setTimeout(()=> {
            this.props.history.push(`/home/message`);
        }, 2000)
    } */
    
    componentWillUnmount() {
        console.log("News组件卸载");
    }

    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        )
    }
}
