import {Navigate} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/Home/News'
import Message from '../pages/Home/Message'

const routerArr = [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/about"/>
    }
]

export default routerArr;