import { createBrowserRouter } from "react-router-dom";
import Donation from "../Components/Donation/Dontaion";
import Events from "../Components/Events/Events";
import Home from "../Components/Home/Home";
import Root from "../Components/Home/Root";
import Profile from "../Components/Profile/Profile";
import Admin from "../Components/Registration/Admin";
import AdminSignUp from '../Components/Registration/AdminSignUp';
import LogIn from "../Components/Registration/LogIn";
import Registration from "../Components/Registration/Registration";
import Users from "../Components/Users/Users";
import PrivateRoute from "./PrivateRoute";

export const router=createBrowserRouter([{
    path:'/',
    element:<Root></Root>,
    children:[
        {path:'/',
        element:<Home></Home>   
    },
        {
            path:'/events',
            element:<Events></Events>
        },
        {
            path:'/donation',
            element:<PrivateRoute><Donation></Donation></PrivateRoute>
        },{
            path:'/registration',
            element:<Registration></Registration>
        },{
            path:'/login',
            element:<LogIn></LogIn>
        },{
            path:'/profile/:id',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },{
            path:'/admin',
            element:<Admin></Admin>
        },{
            path:'/adminLogin',
            element:<AdminSignUp></AdminSignUp>
        },
        {
            path:'/users',
            element:<PrivateRoute><Users></Users></PrivateRoute>
        }
    ]
}])