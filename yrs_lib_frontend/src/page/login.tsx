import React, { useEffect, useRef } from 'react';
import yrs_logo from "../assets/yrs_logo.png"
import "../css/login.css"
import instanceAxios from "../../config/baseAxios"

function Login() {


  function onSubmit(event:React.FormEvent<HTMLFormElement>){
    event?.preventDefault();

    console.log(event.target.user.value);
    console.log(event.target.pwd.value);
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