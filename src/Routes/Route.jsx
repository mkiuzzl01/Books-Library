import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Pages/Home";
import Wishlist from "../components/Pages/Wishlist";
import BookDetails from "../components/Pages/BookDetails";

// this is route component for redirect other route
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
            {
                path:"/Book_Details/:id",
                element:<BookDetails></BookDetails>
            }
        ]
    }
])

export default router;