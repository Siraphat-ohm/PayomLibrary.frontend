import { Outlet, useNavigate } from "react-router-dom";
import loginStyles from "../css/login.module.css"
import axios from "../config/baseAxios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

function Login() {
    const navigate = useNavigate();
    const { login, isLogin } = useAuth();

    useEffect(() => {
        const getAuth = async() => {
            const response = await axios.get('/auth')
            if (response.status != 201) {
                login()
            }
            navigate('/home')
        }
        getAuth();
    }, [])

    function onSubmit(event:any){
        event?.preventDefault();

        let username:string = event.target.user.value;
        let pwd:string = event.target.pwd.value;

        const data = { user:username, pwd:pwd }

        const resLogin = async() => {
            const response = await axios.post("/login", data, { headers : { "Content-Type" : "application/json"}});
            window.location.reload()
        }
        resLogin();
    }

    const showLogin = isLogin ? loginStyles.isLogin : loginStyles.login

    return (<>
        <div className={showLogin}>
                            <form onSubmit={onSubmit}>
                                <p className={loginStyles.color}>
                                    E-maill :  
                                    <input type="username" className={loginStyles.text_search} id="input-email" name="user" />
                                </p>
                                <p className="color">
                                    Password :
                                    <input type="password" className={loginStyles.text_search_2} id="input-password" name="pwd" />
                                </p>
                                <button className={loginStyles.button_login}>LOGIN</button>
                        </form>
    </div> 
    {isLogin ? <Outlet/> : <></>}
    </>)
}

export default Login