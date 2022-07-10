/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
    legacy_createStore as createStore
*/

// 引入createStore，专门用于创建redux中最为核心的store对象
// 引入applyMiddleware可以使用中间件，使得store可以接收回调函数，并使用
// 引入combineReducers，专门用于合并多个reducer
import{legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'
// 引入redux-devtool-extension，方便浏览器可使用redux-devtool
import {composeWithDevTools} from 'redux-devtools-extension'

// 汇总所有的reducer变成一个总的reducer
const allReducers = combineReducers({
    count: countReducer,
    personArr: personReducer
})
// 暴露store
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));