import React, { Component } from 'react'

const dataDetail = [
  {id: "01", content: "hello angular"},
  {id: "02", content: "hello react"},
  {id: "03", content: "hello vue"},
]

export default class Detail extends Component {

  render() {
    console.log(this.props)
    // 接收params参数
    const {id, title} = this.props.match.params;
    const findResult = dataDetail.find(obj=> obj.id===id);
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    )
  }
}
