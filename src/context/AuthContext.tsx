import React, { createContext, ReactNode, useContext, useState } from "react";


type AuthProviderProps = {
    children : JSX.Element | JSX.Element[]
}

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [auth, setAuth] = useState(true);

    return (
        <AuthContext.Provider value={ { auth, setAuth } }>
            {children}
        </AuthContext.Provider>
    )
}