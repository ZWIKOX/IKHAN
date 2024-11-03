import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login.tsx';
import Home from "../pages/Home.tsx";
import Register from "../pages/Register.tsx";
import Users from "../pages/Users.tsx";
import NotFound from "../pages/NotFound.tsx";
import { Layout } from "@/layouts/Layout.tsx";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
]);
