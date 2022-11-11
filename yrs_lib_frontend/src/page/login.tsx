import yrs_logo from "../assets/yrs_logo.png"
import "../css/login.css"
import instanceAxios from "../../config/baseAxios"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate();

  function onSubmit(event:any){
    event?.preventDefault();

    let username:string = event.target.user.value;
    let pwd:string = event.target.pwd.value;

    instanceAxios.post("/login", {user:username, pwd:pwd})
                      .then( (res) => {
                                console.log(res);
                                navigate("/home")
                              })
                      .catch( (err) => console.log(err.message));
  }

  return (
      <div className="login">
                        <img className="school-logo" src={yrs_logo} />
                          <form onSubmit={onSubmit}>
                              <p className="color">
                                  E-maill :  
                                  <input type="username" className="text-search" id="input-email" name="user" />
                              </p>
                              <p className="color">
                                  Password :
                                  <input type="password" className="text-search-2" id="input-password" name="pwd" />
                              </p>
                              <button className="button-login">LOGIN</button>
                          </form>
    </div>
  )
}

export default Login