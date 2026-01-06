import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import Error from "../Component/Error";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children: [
        {
            path:'/',
            Component:Home,
        },
        {
            path:'/about',
            Component:About
        },

        {
         path:'/foods/:id',
         Component:FoodDetails
        },
        {
            path:'/register',
            Component: Register,
        },
        {
            path:'/login',
            Component: LogIn,
        },
        {
            path:'/*',
            Component: Error,
        }
    ]
  },
]);