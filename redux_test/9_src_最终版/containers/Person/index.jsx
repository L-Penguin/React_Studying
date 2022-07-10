import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
    addPerson = ()=> {
        const personObj = {id: nanoid(), name: this.nameNode.value, age: this.ageNode.value*1};
        this.props.addPerson(personObj);
    }

    render() {
        const personArr = this.props.personArr
        return (
            <div>
            <h2>我是Person组件</h2>
            <input ref={c=> this.nameNode=c} type="text" placeholder='输入名字'/>
            <input ref={c=> this.ageNode=c} type="text" placeholder='输入年龄'/>
            <button onClick={this.addPerson}>添加</button>
            <ul>
                {personArr.map(person=> {
                    return <li key={person.id}>姓名: {person.name}--年龄: {person.age}</li>
                })}
            </ul>
            <h4>Count组件求和为{this.props.count}</h4>
            </div>
        )
    }
}

export default connect(
    state=> ({personArr: state.personArr, count: state.count}), // 映射状态
    // 映射操作状态的方法
    {addPerson,}
)(Person)
