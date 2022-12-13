import SearchBar from "../component/SearchBar"
import AppBar from "../component/AppBar"
import { useEffect, useState } from "react";
import instanceAxios from "../../config/baseAxios";

function HomePage(){

    const [booksElement, setBooksElement] = useState([]);
    useEffect(() => {
            instanceAxios.get('/books').then( res => {
                const el = res.data.map((item:any, index:number) => {
                    return (
                        <div key={index} className='book'>
                            <p>{item.title}</p>
                        </div>
                    )
                })
                setBooksElement(el)
            })
    },[])
    
    return (
        <div>
            <SearchBar/>
            {booksElement}
        </div>
    )
}

export default HomePage;