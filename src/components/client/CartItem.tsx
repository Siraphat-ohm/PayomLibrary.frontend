import { Button, Stack } from "react-bootstrap"
import { useCart } from "../../context/CartContext"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, cartItems } = useCart()
  const item = cartItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={`data:image/png;base64,${item.imgBase64}`} 
        style={{ height:"auto", maxWidth:"40%", objectFit:"contain" }}
      />
       <div className="me-auto">
        <div>
          {item.title}{" "}
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
          </span>
        </div>
        </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}