import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


type AuthProviderProps = {
    children : JSX.Element | JSX.Element[]
}

type AuthContext = {
    auth : boolean
    setAuth : Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext({} as AuthContext);

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [auth, setAuth] = useState(false);

    return (
        <AuthContext.Provider value={ { auth, setAuth } }>
            {children}
        </AuthContext.Provider>
    )
}