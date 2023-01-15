import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import Login from "./pages/login";
import UploadPage from "./pages/upload";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage />,
        
    },
    {
        path:"/login",
        element: <Login/>
    }
    ,
    {
        path: "/upload",
        element: <UploadPage/>
    }
])