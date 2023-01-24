import { useEffect, useState } from "react";
import homepageStyles from "../../css/client/homepage.module.css"
import CardBook from "../../components/client/BookCard"
import { AxiosResponse } from "axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


function HomePage(){
    const axiosPrivate = useAxiosPrivate();
    const [data, setData]:any = useState([]);

    useEffect(() => {
        const getBooks = async() => {
            const response : AxiosResponse = await axiosPrivate.get("/books/1")
            response.data.forEach((element:Object) => {
                setData( (e:any) => [...e, element])
            });
        }
        getBooks();
        
    }, [])

    return (
        <div>
            <div className={homepageStyles.flexbox}>
                {data.map((item:any) => (
                    <CardBook data={item} key={item.id}/> 
                ))} 
            </div>
        </div>
    )

}

export default HomePage;