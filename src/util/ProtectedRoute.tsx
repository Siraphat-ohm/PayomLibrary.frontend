import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "../pages/login";
import { children } from "../types/children";

const ProtectedRoute = ({ children } : any) => {
    const { auth } = useAuth();

    if (!auth) { 
        return "";
    }
    
    return (children);
}

export default ProtectedRoute;