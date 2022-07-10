// 创建"外壳"组件App
import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

// 创建App类组件并暴露
export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    // 初始化状态
    state = {
        todos: [
            {id: "001", name: "吃饭", done: true},
            {id: "002", name: "睡觉", done: true},
            {id: "003", name: "打代码", done: false}
        ]
    }

    // addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj)=> {
        // 获取原todos
        const {todos} = this.state;
        // 追加一个todos
        const newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }

    // 更新todos中的一个todo对象
    updateTodo = (id, done)=> {
        // 获取原todos
        const {todos} = this.state;
        // 找到该id的todo并更新
        const newTodos = todos.map(todo=> {
            if (todo.id !== id) return todo;
            else return {...todo, done};
        })
        // 更新状态
        this.setState({todos: newTodos});
    }

    // 删除todos中的一个todo对象
    deleteTodo = (id)=> {
        // 获取原todos
        const {todos} = this.state;
        // 找到该id的todo并删除
        const newTodos = todos.filter(todo=> todo.id!==id)
        // 更新状态
        this.setState({todos: newTodos});
    }

    // 用于全选或全不选todo
    checkAllTodo = (done)=> {
        // 获取原来的todos
        const {todos} = this.state;
        // 更新所有todo的done
        const newTodos = todos.map(todo=> {
            return {...todo, done}
        });
        // 更新todos
        this.setState({todos: newTodos});

    }

    // 用于清除所有已完成的
    clearAllDone = ()=> {
        // 获取原来的todos
        const {todos} = this.state;
        // 过滤数据
        const newTodos = todos.filter(todo=> todo.done===false);
        // 更新todos
        this.setState({todos: newTodos});
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    {/* 使用props传递回调函数，实现子组件给父组件传递数据 */}
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}