import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Foods from '../components/Foods/Foods';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Main from '../layouts/Main';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/foods',
                element: <Foods/>
            },
            {
                path: 'blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])


export default router;










