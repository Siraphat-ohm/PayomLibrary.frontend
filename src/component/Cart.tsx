import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";
import io from "socket.io-client"

const socket = io("http://127.0.0.1:9999")

type CartProps = {
    isOpen: boolean
}


export function Cart({isOpen}:CartProps) {
    const { cartItems, closeCart, cartQuantity } = useCart()
    const order = cartItems.map( item => ({id : item.id, quantity : item.quantity}))
    const sendOrder = () => {
        socket.emit("order",order)
    }
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
                    <Button onClick={sendOrder}>borrowed</Button>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}