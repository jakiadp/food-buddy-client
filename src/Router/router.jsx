import { createBrowserRouter } from "react-router";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";

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
        }
    ]
  },
]);