import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import useAuth from "../../hooks/useAuth";
import { useSocket } from "../../context/SocketContext";

type CartProps = {
    isOpen: boolean
}

export function Cart({isOpen}:CartProps) {
    const { userId } = useAuth();
    const { socket } = useSocket();
    
    async function onLoan(){
        const order = cartItems.map( item => ({id : item.id, title :item.title, ISBN:item.ISBN, userId:userId }))
        await socket.emit('join', userId);
        await socket.emit('order', order);
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
                    <Button onClick={onLoan}>borrowed</Button>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}