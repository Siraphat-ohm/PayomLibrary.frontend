import { createBrowserRouter } from "react-router-dom";
import NavBarAdmin from "./components/admin/NavBarAdmin";
import NavBar from "./components/client/NavBar";
import AdLogin from "./pages/admin/adminLoginPage";
import BookStorePage from "./pages/admin/bookStorePage";
import ReceiptPage from "./pages/admin/ReceiptPage";
import RegisterBookPage from "./pages/admin/registerBookPage";
import RequestPage from "./pages/admin/requestPage";
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
        element:<PrivateRoutes><NavBarAdmin/></PrivateRoutes>,
        children:[
            {
                path:"book-store",
                element:<BookStorePage/>
            },
            {
                path:"request",
                element:<RequestPage/>
            },
            {
                path:"receipt",
                element:<ReceiptPage/>
            },
            {
                path:"register-book",
                element:<RegisterBookPage/>
            }
        ]
    }
    ,{
        path:"*",
        element: <h1>หาไม่เจอหรือเธอไม่มี</h1>
    }
])

export default router;