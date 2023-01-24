import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";

type CartProps = {
    isOpen: boolean
}


export function Cart({isOpen}:CartProps) {
    const { cartItems, closeCart, cartQuantity } = useCart()
    const order = cartItems.map( item => ({id : item.id, quantity : item.quantity}))
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
                    <Button >borrowed</Button>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}