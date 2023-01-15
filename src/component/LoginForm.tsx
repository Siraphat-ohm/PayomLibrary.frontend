import React from "react";

function LoginForm() {
    const navigate = useNavigate();

    function onSubmit(event:any){
        event?.preventDefault();

        let username:string = event.target.user.value;
        let pwd:string = event.target.pwd.value;

        instanceAxios.post("/login", {user:username, pwd:pwd})
                        .then( (res) => {
                                    navigate("/home")
                                })
                        .catch( (err) => console.log(err.message));
    }
    return (
        <div className={loginStyles.login}>
                        <img className={loginStyles.school_logo} src={yrs_logo} />
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

export default LoginForm;