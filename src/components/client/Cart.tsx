import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import io from 'socket.io-client';

const socket = io('http://127.0.0.1:4662');

type CartProps = {
    isOpen: boolean
}

export function Cart({isOpen}:CartProps) {

    function onLoan(){
        const order = cartItems.map( item => ({id : item.id, amount : item.quantity, title :item.title, ISBN:item.ISBN}))
        socket.emit("order", order)
    }

    const { cartItems, closeCart, cartQuantity } = useCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={2}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item}/>
                    ))}
                    <span style={{ fontSize: "1rem" }}>total : {cartQuantity}</span>
                    <Button onClick={onLoan} disabled={true}>borrowed</Button>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}