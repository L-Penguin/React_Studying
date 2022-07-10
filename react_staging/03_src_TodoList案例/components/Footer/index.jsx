import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./index.css"

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    checkAllTodo: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired
  }

  // 全选或全不选的回调
  handleCheckAll = (event)=> {
    this.props.checkAllTodo(event.target.checked);
  }

  // 清除已完成任务的回调
  handleClearAllDone = ()=> {
    this.props.clearAllDone();
  }
  
  render() {
    const {todos} = this.props;
    const total = todos.length;
    const doneCount = todos.reduce((pre, cur)=> pre+(cur.done?1:0), 0)

    return (
      <div className="todo-footer">
        <label>
            <input type="checkbox" checked={doneCount===total && total!==0?true:false} onChange={this.handleCheckAll}/>
        </label>
        <span>
            <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
