import { useEffect, useState } from "react";
import instanceAxios from "../../config/baseAxios";
import homepageStyles from "../css/homepage.module.css"
import CardBook from "../component/BookCard";
import { useCart } from "../context/CartContext";

function HomePage(){
    const [data, setData]:any = useState([]);
    
    useEffect(() => {
        instanceAxios.get('books/1').then(
            res => {
                res.data.forEach((element: any) => {
                    setData((e:any) => [...e, element]);
                });
            }
        )
    }
    ,[])
    return (
        <div>
            <div className={homepageStyles.flexbox}>
                {data.map((item:any, key:number) => (
                    <CardBook data={item} key={item.id}/>
                ))}
            </div>
        </div>
    )

}

export default HomePage;