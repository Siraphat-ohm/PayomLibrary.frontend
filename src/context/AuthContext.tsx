import { createContext, Dispatch, SetStateAction, useState } from "react"

type AuthProviderProps = {
    children : JSX.Element | JSX.Element[]
}

type AuthProps = boolean


type AuthContext = {
    auth : AuthProps
    setAuth : Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext({} as AuthContext)

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [auth, setAuth] = useState(false);
    console.log(auth);

    return (
        <AuthContext.Provider value={ { auth, setAuth} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;