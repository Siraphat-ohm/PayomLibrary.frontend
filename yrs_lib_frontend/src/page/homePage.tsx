import "../css/homepage.css"
import school10 from "../assets/school_logo_10.png"
import backbutton from "../assets/back_button.png"

function HomePage(){
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
                                        ปุริศ ขาวจันทร์
                                    </div>                                
                                </div>
                                <div className="big_box_back_button">
                                    <button className="small_box_back_button">
                                        <img 
                                            src={backbutton}
                                            className="back_button"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="header_2">
                        <div className="small_header_2 action_page">
                            <a className="page_name " >หน้าแรก</a>
                        </div>
                        <div className="small_header_2 action_page">
                            <a className="page_name ">รายการยืมหนังสือ</a>
                        </div>
                        <div className="small_header_2 action_page">
                            <a className="page_name">
                                ประวัติการยืม-คืนหนังสือ
                            </a> 
                        </div>
                        <div className="small_header_2">
                        </div>
                    </div>    
                </div>
            </header>
        </div>
    )
}

export default HomePage;