import SearchBar from "../component/SearchBar"
import { useEffect, useState } from "react";
import instanceAxios from "../../config/baseAxios";
import feyman from "../assets/feyman.jpg" 
import "../css/homepage.css"
import Button from 'react-bootstrap/Button';

function HomePage(){
    
    return (
        <div>
            <div className="flexbox">
                <div className="item">
                    <div className="img-box">
                        <img className="bookImg" src={feyman} />
                    </div>
                    <div className="content">
                        <p className="title-info">title : lecture of feyman</p>
                        <p className="title-info">amount : 2</p>
                        <Button variant="primary" className="btn-add">add to cart</Button>
                        <Button variant="secondary" className="btn-view">view</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;