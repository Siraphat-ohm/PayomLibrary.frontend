import SearchBar from "../component/SearchBar"
import { useEffect, useState } from "react";
import instanceAxios from "../../config/baseAxios";
import feyman from "../assets/feyman.jpg" 
import Button from 'react-bootstrap/Button';
import homepageStyles from "../css/homepage.module.css"

function HomePage(){
    
    return (
        <div>
            <div className={homepageStyles.flexbox}>
                <div className={homepageStyles.item}>
                    <div className={homepageStyles.img_box}>
                        <img className={homepageStyles.bookImg} src={feyman} />
                    </div>
                    <div className={homepageStyles.content}>
                        <p className={homepageStyles.title_info}>title : lecture of feyman</p>
                        <p className={homepageStyles.title_info}>amount : 2</p>
                        <Button variant="primary" className={homepageStyles.btn_add}>add to cart</Button>
                        <Button variant="secondary" className={homepageStyles.btn_view}>view</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;