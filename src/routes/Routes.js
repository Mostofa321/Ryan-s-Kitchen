import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import FoodDetails from '../components/FoodDetails/FoodDetails';
import AddFood from '../components/Foods/AddFood';
import Foods from '../components/Foods/Foods';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Main from '../layouts/Main';
import PrivateRoute from './PrivateRoute'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('http://localhost:5000/food?home=home')
            },
            {
                path: '/foods',
                element: <Foods/>,
                loader: () => fetch('http://localhost:5000/food')
            },
            {
                path: '/foods/:id',
                element: <FoodDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
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
                element: <PrivateRoute><AddFood/></PrivateRoute>
            }
        ]
    }
])


export default router;










