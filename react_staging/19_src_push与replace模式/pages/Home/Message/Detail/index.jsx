import React, { Component } from 'react'
// import qs from 'query-string'

const dataDetail = [
  {id: "01", content: "hello angular"},
  {id: "02", content: "hello react"},
  {id: "03", content: "hello vue"},
]

export default class Detail extends Component {

  render() {
    console.log(this.props);
    
    // const {id, title} = this.props.match.params;  // 接收params参数

    // 接收search参数
    /* const {search} = this.props.location;
    const {id, title} = qs.parse(search); */

    // 接收state参数
    const {id, title} = this.props.location.state || {};
    const findResult = dataDetail.find(obj=> obj.id===id);
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult?.content}</li>
      </ul>
    )
  }
}
