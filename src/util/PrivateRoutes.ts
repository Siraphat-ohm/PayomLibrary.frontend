import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  axios  from "../config/baseAxios";
import useAuth from "../hooks/useAuth";

function PrivateRoutes({children}: any){
    const navigate = useNavigate();
    const { setUser, setUserId } = useAuth();
    useEffect(() => {
        const getAuth = async() => {
            const response = await axios.get('/auth')
            setUser(response.data.user)
            setUserId(response.data.id)
            if (!response.data.isLogin) return navigate('/login')
        }
        getAuth()
    }, [])
    return children
}

export default PrivateRoutes