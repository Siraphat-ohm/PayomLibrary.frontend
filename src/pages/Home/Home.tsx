import { CardBook } from "./CardBook"
import "./Home.css"
import { useEffect, useState } from "react"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Skeleton } from "@mantine/core"

export const Home = () => {

    const axiosPrivate = useAxiosPrivate();
    const [cards, setCard] = useState<JSX.Element[]>();

    useEffect(() => {
        axiosPrivate.get("/books/1").then((res) => {
                const el = res.data.map( (item:any)  => {
                    return <CardBook key={item.id}
                        data={
                            {
                                id: item.id,
                                category: item.categories[0].name,
                                img: item.thumbnail,
                                ISBN: item.ISBN,
                                quantity: item.copies,
                                title: item.title,
                                author: item.authors[0].name
                            }
                        }
                    />
                })
                setCard(el);
        })

    }, [])

    return (
        <Skeleton visible={false}>
            <div className="container">
                {cards?.map( item => item)}
            </div>
        </Skeleton>
    )
}