import React, { createContext, ReactNode, useContext, useState } from "react";


type AuthProviderProps = {
    children : ReactNode
}

type AuthContext = {
    auth : boolean
}

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [auth, setAuth] = useState<AuthContext>();
    return (
        <AuthContext.Provider value={ { auth, setAuth} }>
            {children}
        </AuthContext.Provider>
    )

}