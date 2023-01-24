import { createBrowserRouter } from "react-router-dom";
import NavBarAdmin from "./components/admin/NavBarAdmin";
import NavBar from "./components/client/NavBar";
import AdLogin from "./pages/admin/adminLoginPage";
import HistoryPage from "./pages/client/historyPage";
import HomePage from "./pages/client/homePage";
import ListPage from "./pages/client/listPage";
import Login from "./pages/client/login";
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
    },
    {
        path:"/system-login",
        element: <AdLogin/>
    },
    {
        path:"/system",
        element:<NavBarAdmin/>,
    }
    ,{
        path:"*",
        element: <h1>หาไม่เจอหรือเธอไม่มี</h1>
    }
])

export default router;