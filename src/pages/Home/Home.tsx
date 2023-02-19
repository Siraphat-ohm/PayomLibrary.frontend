import { CardBook } from "./CardBook"
import "./Home.css"
import { useEffect, useState } from "react"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Pagination, Skeleton } from "@mantine/core"

export const Home = () => {

    const axiosPrivate = useAxiosPrivate();
    const [cards, setCard] = useState<JSX.Element[]>();
    const [activePage, setPage] = useState(1);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        axiosPrivate.get("/books/page").then(res => setTotal(res.data))
    })

    useEffect(() => {
        axiosPrivate.get(`/books/${activePage}`).then((res) => {
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

    }, [activePage])

    return (
        <Skeleton visible={false}>
            <div className="container">
                {cards?.map( item => item)}
            </div>
            <Pagination page={activePage} total={total} position="center" color="cyan" withEdges onChange={setPage}/>
        </Skeleton>
    )
}