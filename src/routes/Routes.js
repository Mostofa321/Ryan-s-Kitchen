import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import AddFood from '../components/Foods/AddFood';
import Foods from '../components/Foods/Foods';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
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
            },
            {
                path: '/signUp',
                element: <SignUp/>
            },
            {
                path:'/addFood',
                element: <AddFood/>
            }
        ]
    }
])


export default router;










