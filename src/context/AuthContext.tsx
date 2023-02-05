import axios from '../config/baseAxios';
import { useState, createContext, useEffect, useContext } from 'react';
import { children } from '../types/children';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext)
}

const AuthProvidder = ({children}:children ) => {
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("/auth")
            .then(res => {
                navigate('/main/home', { replace: true })
            })
            .catch(err => {
                navigate('/login', { replace: true })
            })
    }, []);

    return (
        <AuthContext.Provider value={{ }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvidder;