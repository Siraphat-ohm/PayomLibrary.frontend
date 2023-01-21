import { createBrowserRouter } from "react-router-dom";
import NnavBar from "./component/NavBar";
import HistoryPage from "./pages/historyPage";
import HomePage from "./pages/homePage";
import ListPage from "./pages/listPage";
import Login from "./pages/login";

const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login />,
        
    },
    {
        path:"/",
        element: <NnavBar/>,
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