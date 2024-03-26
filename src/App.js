import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import 'antd/dist/reset.css';
import { Header } from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import RestaurantCard from "./components/RestaurantCard";

const AppLayoutComponent = () => {
    return (<div className="app">
        <Header />
        <Outlet/>
    </div>);
}


const router = createBrowserRouter([


    {
        path: "/",
        element: <AppLayoutComponent />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            }
            ,
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />
            },
            {
                path: "/restaurant/:rid",
                element: <RestaurantMenu />,
                errorElement: <Error />
            }
        ],
        errorElement: <Error />
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);