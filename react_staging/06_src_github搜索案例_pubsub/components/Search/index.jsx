import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

    search = ()=> {
        // 获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement: {value: keyWord}} = this
        // 发送请求前通知List更新状态
        // this.props.updateAppState({isFirst: false, isLoading: true});
        Pubsub.publish("updateState", {isFirst: false, isLoading: true});

        // 发送网络请求
        axios.get('/api1/search/users', {params: {q: keyWord}}).then(
            res=> {
                // 请求成功后通知List更新状态
                // this.props.updateAppState({isLoading: false, users: res.data.items});
                Pubsub.publish("updateState", {isLoading: false, users: res.data.items});

            },
            err=> {
                // 请求失败后通知List更新状态
                // this.props.updateAppState({isLoading: false, err:err.message})
                Pubsub.publish("updateState", {isLoading: false, err:err.message});

            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c=> this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
