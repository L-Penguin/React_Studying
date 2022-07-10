/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
    legacy_createStore as createStore
*/

// 引入createStore，专门用于创建redux中最为核心的store对象
// 引入applyMiddleware可以使用中间件，使得store可以接收回调函数，并使用
import{legacy_createStore as createStore, applyMiddleware} from 'redux'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtool-extension，方便浏览器可使用redux-devtool
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入汇总之后的reducer
import reducer from './reducers'

// 暴露store
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));