import { useNavigate } from "react-router-dom";
import loginStyles from "../css/login.module.css"
import axios from "../../config/baseAxios";
import { useEffect } from "react";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const getAuth = async() => {
            const response = await axios.get("/auth")
            if(response.data.isLogin) return navigate('/home')
        }
        getAuth();
    }, [])

    function onSubmit(event:any){
        event?.preventDefault();

        let username:string = event.target.user.value;
        let pwd:string = event.target.pwd.value;

        const data = { user:username, pwd:pwd }

        const resLogin = async() => {
            await axios.post("/login", data, { headers : { "Content-Type" : "application/json"}});
            navigate('/home')
        }
        resLogin();
    }


    return (
        <div className={loginStyles.login}>
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
    </div>)
}

export default Login