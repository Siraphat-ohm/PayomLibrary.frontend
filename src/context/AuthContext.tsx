import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../config/baseAxios';
import { children } from '../types/children';

interface User {
    email:string,
    role:string
}

interface AuthContextType { 
    isAuthenticated: boolean,
    setIsAuthenticated: (value: boolean) => void;
    logout: () => void
    user: User
    isAdmin: boolean
    setIsAdmin: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    logout: () => {},
    user: ({} as User),
    isAdmin: false,
    setIsAdmin: () => {}
});

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvidder = ({children}:children ) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(({} as User));
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        axios.get('/auth')
            .then(res => {
                setIsAuthenticated(res.data.Authenticated);
                setUser(res.data);
                setIsAdmin(res.data.isAdmin);
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const logout = () => {
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout, user, isAdmin, setIsAdmin}}>
            {children}
        </AuthContext.Provider>
    );
}