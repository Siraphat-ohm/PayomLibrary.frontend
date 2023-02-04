import { createBrowserRouter } from "react-router-dom";
import Navbars from "./components/Navbars";
import HomePage from "./pages/client/homePage";
import Login from "./pages/client/login";

const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login/>,
    },
    {
        path:"/",
        element: <Navbars/>,
        children : [
            {
                path:"home",
                element:<HomePage/>
            },
            {
                path:"cart",
                element:<h1>cart</h1>
            },
            {
                path:"order",
                element:<h1>cart</h1>
            }
        ]
    }
    ,
    {
        path:"*",
        element: <h1>หาไม่เจอหรือเธอไม่มี</h1>
    }
])

export default router;