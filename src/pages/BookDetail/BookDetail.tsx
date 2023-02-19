import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

interface bookProps {
    id: string,
    title: string,
    description: string,
    ISBN: string,
    pubYear: number,
    page: number,
    copies: number,
    thumbnail: string,
    authors: string[],
    category: string[]
    language: string
    
}

export const BookDetail = () => {
    const { id } = useParams();
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState<bookProps>();

    useEffect(() => {
        axiosPrivate.get(`/books/${id}`).then( res => setData(res.data))
    }, [])
    return (
        <div className="container">

        </div>

    )
}