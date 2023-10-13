import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../components/Home/Home";
import Users from "../components/Home/Users/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/users',
                element: <Users></Users>,
            }
        ]
    }
])

export default router;