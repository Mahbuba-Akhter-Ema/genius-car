import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import DreamJob from "../../Pages/DreamJob/DreamJob";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/dreamjob',
                element: <DreamJob></DreamJob>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }

        ]
    }
])