import Card from 'react-bootstrap/Card';
import bookcardStyles from '../../css/client/bookcard.module.css'
import { Button } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

type CartItem = {
    id:number,
    title:string,
    imgBase64:string,
    quantity:number
}

function CardBook(props:any){
    const { graphic, title,  copies_owned, id } = props.data
    const { getBookQuantity, addToCart, removeFromCart } = useCart();

    const book:CartItem = { 
        'id' : id,
        'title' : title,
        'imgBase64': graphic,
        'quantity': 1
    }
    
    return (
        <Card style={{ width: '15rem', height:"25rem" }} className={bookcardStyles.item}>
            <Card.Img variant="top" src={`data:image/png;base64,${graphic}`} className={bookcardStyles.card_img_top}/>
            <Card.Body>
                <Card.Title className={bookcardStyles.title_info}>title: {title}</Card.Title>
                <Card.Text>amount: {copies_owned}</Card.Text>
            <Button variant="secondary" className={bookcardStyles.btn_view} >view</Button>
            <Button variant="primary" className={bookcardStyles.btn_add} onClick={() => addToCart(book)}>add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default CardBook