import { useNavigate } from "react-router-dom";
import "../../css/client/login.css"
import axios from "../../config/baseAxios";
import { useEffect } from "react";
import roles from "../../config/roles.json"
import school_3 from "../../assets/client/img/school_logo_3.png"
import { AiOutlineUser } from "react-icons/ai"
import { Button, Form } from "react-bootstrap";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const getAuth = async() => {
            const response = await axios.get("/auth")
            if(response.data.isLogin&& (response.data.role == roles.student)) return navigate('/home')
        }
        getAuth();
    }, [])

    function onSubmit(event:any){
        event?.preventDefault();

        let username:string = event.target.user.value;
        let pwd:string = event.target.pwd.value;

        const data = { user:username, pwd:pwd }

        const resLogin = async() => {
            let reponse = await axios.post("/login", data, { headers : { "Content-Type" : "application/json"}});
            if (reponse.data.role == roles.student) return navigate('/home')
        }
        resLogin();
    }

    return (
        <div className="login">
        <p>
            <img className="school_logo" src={school_3}/>
        </p>
        <form onSubmit={onSubmit}>
            <p className="login_header">login<AiOutlineUser size="25px"></AiOutlineUser></p>
            <p className="color">
                <Form.Control type="user" name="user" placeholder="Username" className="text_search"/>
            </p>
            <p className="color">
                <Form.Control type="password" name="pwd" placeholder="Password" className="text_search_2"/>
            </p>
            <Button className="button_login" type="submit">Login</Button>
        </form>
    </div>
    )
}

export default Login