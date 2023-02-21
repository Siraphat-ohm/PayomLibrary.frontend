import { CardBook } from "./CardBook"
import "./Home.css"
import { useEffect, useState } from "react"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Modal, Pagination, Skeleton } from "@mantine/core"

interface book {
    id: string,
    title: string,
    ISBN: string,
    quantity: string,
    category: string,
    img: string,
    author: string
}

export const Home = () => {
    const axiosPrivate = useAxiosPrivate();
    const [cards, setCard] = useState<JSX.Element[]>();
    const [activePage, setPage] = useState(1);
    const [total, setTotal] = useState(0)


    useEffect(() => {
        axiosPrivate.get("/books/page").then(res => {
            setTotal(res.data)
        })
    })

    useEffect(() => {
        axiosPrivate.get(`/books/by/${activePage}`).then((res) => {
                const el = res.data.map( (item:any)  => {
                    return (
                            <CardBook
                                data={item}
                                key={item.id}
                            />
                )})
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