import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext();
const {Provider, Consumer} = MyContext;
export default class A extends Component {
    state = {username: "tom"}
        
    render() {
        const {username} = this.state
        return (
            <div className='parent'>
                <div>我是A组件</div>
                <h4>我的用户名是: {username}</h4>
                <Provider value={username}>
                    <B/>
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <div>我是B组件</div>
                <C/>
            </div>
        )
    }
}

/* class C extends Component {
    // 声明接收context
    static contextType = MyContext;
    render() {
        console.log(this.context);
        return (
            <div className='grand'>
                <div>我是C组件</div>
                <h4>我从A组件获取的用户名是: {this.context}</h4>
            </div>
        )
    }
} */

// 函数式组件接收
function C() {
    /*
        或者可以使用useContext
        const userName = useContext('MyContext');
        此时userName = 'tom'
    */
    return (
        <div className='grand'>
                <div>我是C组件</div>
                <h4>我从A组件获取的用户名是: 
                    <Consumer>
                        {
                            value=> {
                                return value;
                            }
                        }
                    </Consumer>
                </h4>
            </div>
    )
}
