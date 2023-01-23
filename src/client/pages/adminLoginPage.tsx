import { RiAdminLine } from "react-icons/Ri"
import "../css/adminLogin.css"
import school_3 from "../assets/img/school_logo_3.png"

function AdLogin(){
    return (
        <div className="login">
        <p>
            <img className="school_logo" src={school_3}/>
        </p>
        <form action="" method="POST">
            <p className="login_header">login admin <RiAdminLine size="25px"></RiAdminLine></p>
            <p className="color">
                <input type="email" className="text_search Font" id="input-email" name="E-mail" placeholder="Username"/>
            </p>
            <p className="color">
                <input type="password"  className="text_search_2 Font" id="input-password" name="Password" placeholder="Password"/>
            </p>
            <button className="button_login" type="submit">Login</button>
        </form>
    </div>
    )
}

export default AdLogin;