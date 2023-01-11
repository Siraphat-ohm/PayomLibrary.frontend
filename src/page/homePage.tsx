import { useEffect, useState } from "react";
import instanceAxios from "../../config/baseAxios";
import feyman from "../assets/feyman.jpg" 
import homepageStyles from "../css/homepage.module.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomePage(){
    
    let [el, setEl]:any = useState();
    let [image, setImage]:any = useState();
    
    useEffect(() => {

        instanceAxios.get('/books/1').then( res => {
            console.log(res.data);
            const element = res.data.map((item:any, index:any) => {
            return (
                        <Card style={{ width: '18rem' }} className={homepageStyles.item} key={index}>
                            <Card.Img variant="top" src={`data:image/png;base64,${item.graphic}`} className={homepageStyles.card_img_top}/>
                            <Card.Body>
                                <Card.Title className={homepageStyles.title_info}>title : {item.title}</Card.Title>
                                <Card.Text>amount : {item.copies_owned}</Card.Text>
                            <Button variant="secondary" className={homepageStyles.btn_view}>view</Button>
                            <Button variant="primary" className={homepageStyles.btn_add}>add to cart</Button>
                            </Card.Body>
                        </Card>
            )})
            setEl(element)})
        }, [])


    return (
        <div>
            <div className={homepageStyles.flexbox}>
                {el}
            </div>
        </div>
    )
}

export default HomePage;