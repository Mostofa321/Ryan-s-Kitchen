import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import FoodDetails from '../components/FoodDetails/FoodDetails';
import AddFood from '../components/Foods/AddFood';
import Foods from '../components/Foods/Foods';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Main from '../layouts/Main';
import MyReviews from '../myReviews/MyReviews';
import PrivateRoute from './PrivateRoute'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('https://assignment-11-server-phi-rosy.vercel.app/food?home=home')
            },
            {
                path: '/foods',
                element: <Foods/>,
                loader: () => fetch('https://assignment-11-server-phi-rosy.vercel.app/food')
            },
            {
                path: '/foods/:id',
                element: <FoodDetails/>,
                loader: ({params}) => fetch(`https://assignment-11-server-phi-rosy.vercel.app/food/${params.id}`)
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
            },
            {
                path: '/myReviews',
                element:<PrivateRoute><MyReviews/></PrivateRoute>
            }
        ]
    }
])


export default router;










