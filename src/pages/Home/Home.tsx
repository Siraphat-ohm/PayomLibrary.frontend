import { CardBook } from "./CardBook"
import "./Home.css"
import books from "../../config/books.json"
import { useEffect, useState } from "react"

export const Home = () => {

    const [cards, setCard] = useState<JSX.Element[]>();
    useEffect(() => {
        const el =  books.map( item =>{
            return <CardBook key={item.id} 
                data={
                    {
                        id: item.id, 
                        category:item.category, 
                        img: item.img, 
                        ISBN:item.ISBN, 
                        quantity:String(item.quantity), 
                        title: item.title
                    }
                }
                    />
            })
        setCard(el)
    }, [])

    return (
        <div className="container">
            {cards?.map(item => item)}
        </div>
    )
}