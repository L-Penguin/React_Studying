import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件
/* class Demo extends React.Component {
    state = {count: 0}
    myRef = React.createRef();

    add = ()=> {
        this.setState(state=> ({count: this.state.count+1}))
    }

    unmount = ()=> {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }

    show = ()=> {
        alert(this.myRef.current.value)
    }

    componentDidMount() {
        this.timer = setInterval(()=> {
            this.setState(state=> ({count: state.count+1}))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show}>展示数据</button>
            </div>
        )
    }
} */

function Demo() {

    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState("tom")

    const myRef = React.createRef();

    React.useEffect(()=> {
        const timer = setInterval(()=> {
            setCount(count=> count+1);
        }, 1000)
        // 返回的回调函数相当于componentWillUnmount回调函数
        return ()=> {
            clearInterval(timer);
        }
    }, [])

    function add() {
        // setCount(count+1)    // 第一种写法
        setCount(count=> count+1);
    }

    function changeName() {
        setName(name+"~");
    }

    // 卸载组件的回调
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }

    function show() {
        alert(myRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为: {count}</h2>
            <button onClick={add}>点我+1</button>
            <h4>{name}</h4>
            <button onClick={changeName}>改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>展示数据</button>
        </div>
    )
}

export default Demo;