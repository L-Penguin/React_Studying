import React from 'react'
import {NavLink, useRoutes} from 'react-router-dom'
import Header from './components/Header'
import routes from './routes'

export default function App() {
    // 根据路由表生成对应的路由规则
    const element = useRoutes(routes)

    return (
        <div>
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        {/* end属性作用，子路由匹配自身失去高亮 */}
                        <NavLink className="list-group-item" to="/home" end>Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
