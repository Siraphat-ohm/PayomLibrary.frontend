import { createBrowserRouter } from "react-router-dom";
import NavBar from "./component/NavBar";
import HistoryPage from "./pages/historyPage";
import HomePage from "./pages/homePage";
import ListPage from "./pages/listPage";
import Login from "./pages/login";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Login />,
        children : [
            {
                path: "/",
                element: <NavBar/>,
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
            }
        ]

    },{
        path:"*",
        element: <h1>หาไม่เจอหรือเธอไม่มี</h1>
    }
])

export default router;