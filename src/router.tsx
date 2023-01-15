import { createBrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import HistoryPage from "./pages/historyPage";
import HomePage from "./pages/homePage";
import ListPage from "./pages/listPage";
import Login from "./pages/login";
import UploadPage from "./pages/upload";
import ProtectedRoute from "./util/ProtectedRoute";

const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login />,
        
    },
    {
        path:"/",
        element: <ProtectedRoute><Navbar/></ProtectedRoute>,
        children : [
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
        
    }
])

export default router;