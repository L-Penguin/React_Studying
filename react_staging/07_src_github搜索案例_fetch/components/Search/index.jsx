import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

    search = async ()=> {
        // 获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement: {value: keyWord}} = this
        // 发送请求前通知List更新状态
        // this.props.updateAppState({isFirst: false, isLoading: true});
        Pubsub.publish("updateState", {isFirst: false, isLoading: true});

        // #region 发送网络请求----使用axios发送
        /* axios.get('/api1/search/users', {params: {q: keyWord}}).then(
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
        ) */
        // #endregion

        // 发送网络请求---s=使用fetch发送(未优化)
        /* fetch(`/api1/search/users?q=${keyWord}`).then(
            res=> {
                console.log("联系服务器成功了")
                return res.json();
            },
            err=> {
                console.log("联系服务器失败了", err);
                return new Promise(()=>{})
            }
        ).then(
            res=> {
                console.log("获取数据成功了", res)
            },
            err=> {
                console.log("获取数据失败了", err)
            }
        ) */

        // 发送网络请求----使用fetch发送(优化)
        try {
            const response = await fetch(`/api1/search/users?q=${keyWord}`);
            const data = await response.json();
            Pubsub.publish("updateState", {isLoading: false, users: data.items});
        } catch (error) {
            Pubsub.publish("updateState", {isLoading: false, err: error.message});
        }
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
