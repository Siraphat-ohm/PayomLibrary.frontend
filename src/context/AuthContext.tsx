import { createContext, Dispatch, SetStateAction, useState } from "react"

type AuthProviderProps = {
    children : JSX.Element | JSX.Element[]
}

type AuthProps = {
    accessToken? : string
}


type AuthContext = {
    auth : AuthProps
    setAuth : Dispatch<SetStateAction<AuthProps>>
    login : () => void
    logout : () => void
    isLogin : boolean
}

const AuthContext = createContext({} as AuthContext)

export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [auth, setAuth] = useState({});
    const [ isLogin , setIsLogin ] = useState<boolean>(false)

    const login = () => {
        setIsLogin(true)
    }

    const logout = () => {
        setIsLogin(false)
    }

    return (
        <AuthContext.Provider value={ { auth, setAuth , login, logout, isLogin} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;