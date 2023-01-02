import React from "react"
import school10 from "../assets/school_logo_10.png"
import backbutton from "../assets/back_button.png"
import "../css/menubar.css"
import { NavLink } from "react-router-dom"
import instanceAxios from "../../config/baseAxios"
import { useNavigate } from "react-router-dom"


function AppBar(props:any){

    const navigate = useNavigate();

    function getNavClass(navLinkProps:any){
        let navClass : string = "app-header-item";
        if (navLinkProps.isActive) navClass += ' app-header-item-active';
        return navClass;
    }

    function logout(){
        instanceAxios.get("/logout").then(res => {
            navigate('/login')                     
        })
    }

    return (
        <div>
            <header className="header">
                <div>
                    <div className="header_1">
                        <div className="position">
                            <div>
                                <img 
                                    src={school10}
                                    className="school_image"
                                />
                            </div>
                            <div className="big_box_username">
                                <div className="box_username">
                                    <div className=" username">
                                        {props.name}
                                    </div>                                
                                </div>
                                <div className="big_box_back_button">
                                    <button className="small_box_back_button">
                                        <img
                                            src={backbutton}
                                            className="back_button"
                                            onClick={logout}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="header_2">
                            <NavLink className={getNavClass} to="/home">หน้าแรก</NavLink>
                            <NavLink className={getNavClass} to="/list">รายการหนังสือ</NavLink>
                            <NavLink className={getNavClass} to="/history">ประวัติการยืม-คืนหนังสือ</NavLink>
                            <NavLink className={getNavClass} to="/newbook">เพิ่มหนังสือ</NavLink>
                    </div>    
                </div>
            </header>
        </div>
    )
}

export default AppBar;