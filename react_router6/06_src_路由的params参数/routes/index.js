import {Navigate} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/Home/News'
import Message from '../pages/Home/Message'
import Detail from '../pages/Home/Message/Detail'

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
                element: <Message/>,
                children: [
                    {
                        path: 'detail/:id/:title/:content',
                        element: <Detail/>
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/about"/>
    }
]

export default routerArr;