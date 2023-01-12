import Card from 'react-bootstrap/Card';
import bookcardStyles from '../css/bookcard.module.css'
import { Button } from 'react-bootstrap';

function CardBook(props:any){
    const { graphic, title,  copies_owned } = props.data

    
    return (
        <Card style={{ width: '18rem' }} className={bookcardStyles.item} >
            <Card.Img variant="top" src={`data:image/png;base64,${graphic}`} className={bookcardStyles.card_img_top}/>
            <Card.Body>
                <Card.Title className={bookcardStyles.title_info}>title : {title}</Card.Title>
                <Card.Text>amount : {copies_owned}</Card.Text>
            <Button variant="secondary" className={bookcardStyles.btn_view} onClick={() => }>view</Button>
            <Button variant="primary" className={bookcardStyles.btn_add}>add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default CardBook