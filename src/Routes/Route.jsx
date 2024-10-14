import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Pages/Home";
import Wishlist from "../components/Pages/wishlist";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/Wishlist',
                element:<Wishlist></Wishlist>
            },
        ]
    }
])

export default router;