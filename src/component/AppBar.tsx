import React from "react"
import school10 from "../assets/school_logo_10.png"
import backbutton from "../assets/back_button.png"
import { NavLink } from "react-router-dom"
import instanceAxios from "../../config/baseAxios"
import { useNavigate } from "react-router-dom"
import menubarStyles from "../css/menubar.module.css"

function AppBar(props:any){

    const navigate = useNavigate();
    function getNavClass(navLinkProps:any){
        let navClass  = menubarStyles.app_header_item;
        if (navLinkProps.isActive) navClass += ` ${menubarStyles.app_header_item_active}`;
        return navClass;
    }

    function logout(){
        instanceAxios.get("/logout").then(res => {
            navigate('/login')                     
        })
    }

    return (
            <header className={menubarStyles.header}>
                <div>
                    <div className={menubarStyles.header_1}>
                        <div className={menubarStyles.position}>
                            <div>
                                <img 
                                    src={school10}
                                    className={menubarStyles.school_image}
                                />
                            </div>
                            <div className={menubarStyles.big_box_username}>
                                <div className={menubarStyles.box_username}>
                                    <div className={menubarStyles.username}>
                                        {props.name}
                                    </div>                                
                                </div>
                                <div className={menubarStyles.big_box_back_button}>
                                    <button className={menubarStyles.small_box_back_button}>
                                        <img
                                            src={backbutton}
                                            className={menubarStyles.back_button}
                                            onClick={logout}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={menubarStyles.header_2}>
                            <NavLink className={getNavClass} to="/home">หน้าแรก</NavLink>
                            <NavLink className={getNavClass} to="/list">รายการหนังสือ</NavLink>
                            <NavLink className={getNavClass} to="/history">ประวัติการยืม-คืนหนังสือ</NavLink>
                            <NavLink className={getNavClass} to="/newbook">เพิ่มหนังสือ</NavLink>
                    </div>    
                </div>
            </header>
    )
}

export default AppBar;