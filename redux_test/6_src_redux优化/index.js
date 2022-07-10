import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  // Provider组件可以查找到所有的容器组件并传送store
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)

