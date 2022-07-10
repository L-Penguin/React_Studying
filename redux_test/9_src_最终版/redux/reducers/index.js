/* 
    该文件用于汇总所有的reducer为一个总的reducer
*/

// 引入combineReducers，专门用于合并多个reducer
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import personArr from './person'

// 汇总所有的reducer变成一个总的reducer并暴露
export default combineReducers({ count, personArr})

