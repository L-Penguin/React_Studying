import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import Demo from './components/Demo'

ReactDOM.render(
    <div>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        <Demo/>
    </div>, 
    document.getElementById("root")
);