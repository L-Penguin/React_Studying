import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users: [
        //     {id: "001", name: "tom", age: 18},
        //     {id: "002", name: "jack", age: 19},
        //     {id: "003", name: "mary", age: 20},
        // ]
        users: '123'
    }

    render() {
        return (
        <div>
            <h2>我是Child组件</h2>
            {
                this.state.users.map(user=> {
                    return <h4 key={user.id}>{user.name}----{user.age}</h4>
                })
            }
        </div>
        )
    }
}
