import { useNavigate } from "react-router-dom";
import loginStyles from "../css/login.module.css"
import axios from "../config/baseAxios";
import useAuth from "../hooks/useAuth";

function Login() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    function onSubmit(event:any){
        event?.preventDefault();

        let username:string = event.target.user.value;
        let pwd:string = event.target.pwd.value;

        const data = { user:username, pwd:pwd }

        const resLogin = async() => {
            const response = await axios.post("/login", data, { headers : { "Content-Type" : "application/json"}});
            setAuth(response.data.auth)
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
    </div> )
}

export default Login