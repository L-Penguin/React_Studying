// 引入react核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
// 引入App组件
import App from './App'

// 渲染App到页面上
ReactDOM.render(
    // 使用HashRouter可以解决样式丢失问题
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById("root")
)