// 引入Count的UI组件
import CountUI from '../../components/Count';
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux';
// 引入action
import {
    createIncrementAction, 
    createDecrementAction, 
    createIncrementAsyncAction
} from '../../redux/count_action_creators'

/* 
    1.mapStateToPropsa函数返回的是一个对象;
    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapStateToPropsa用于传递状态
*/
function mapStateToPropsa(state) {
    return {count: state};
}

/* 
    1.mapDispatchToProps函数返回的是一个对象;
    2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
    return {
        increment: num=> dispatch(createIncrementAction(num)),
        decrement: num=> dispatch(createDecrementAction(num)),
        incrementAsync: (num, time)=> dispatch(createIncrementAsyncAction(num, time)),
    }
}

// 使用connect()()创建并暴露Count的容器组件
export default connect(mapStateToPropsa, mapDispatchToProps)(CountUI);


