import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Search extends Component {
    static propTypes = {
        updateAppState: PropTypes.func.isRequired
    }

    search = ()=> {
        // 获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement: {value: keyWord}} = this
        // 发送请求前通知App更新状态
        this.props.updateAppState({isFirst: false, isLoading: true});

        // 发送网络请求
        axios.get('/api1/search/users', {
            params: {
                q: keyWord
            }
        }).then(
            res=> {
                // 请求成功后通知App更新状态
                this.props.updateAppState({isLoading: false, users: res.data.items});
            },
            err=> {
                // 请求失败后通知App更新状态
                this.props.updateAppState({isLoading: false, err:err.message})
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
