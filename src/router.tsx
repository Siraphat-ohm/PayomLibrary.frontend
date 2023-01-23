import { createBrowserRouter } from "react-router-dom";
import NavBar from "./client/components/NavBar";
import AdLogin from "./client/pages/adminLoginPage";
import HistoryPage from "./client/pages/historyPage";
import HomePage from "./client/pages/homePage";
import ListPage from "./client/pages/listPage";
import Login from "./client/pages/login";
import PrivateRoutes from "./util/PrivateRoutes";

const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <PrivateRoutes><NavBar/></PrivateRoutes>,
        children: [
            {
                path:"home",
                element: <HomePage/>
            },
            {
                path:"list",
                element: <ListPage/>
            },
            {
                path:"history",
                element: <HistoryPage/>
            }
        ]
    },{
        path:"/system",
        element: <AdLogin/>
    }
    ,{
        path:"*",
        element: <h1>หาไม่เจอหรือเธอไม่มี</h1>
    }
])

export default router;