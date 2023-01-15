import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "../pages/login";
import { children } from "../types/children";

const ProtectedRoute = ({ children } : any) => {
    const { auth } = useAuth();
    const navigate = useNavigate();

    if (!auth) { 
        navigate('/login', { replace: true});
    }
    
    return (children);
}

export default ProtectedRoute;