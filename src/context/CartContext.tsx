import { createContext, ReactNode, useContext, useState } from "react";
import { Cart } from "../components/client/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id:number,
    title:string,
    imgBase64:string,
    ISBN:string
}

type CartContext = {
    openCart: () => void
    closeCart: () => void
    addToCart: (book:CartItem) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const CartContext = createContext({} as CartContext)

export function useCart(){
    return useContext(CartContext)
}

export function CartProvider( {children}: CartProviderProps ){
    const [cartItems, setCartItmes] = useLocalStorage<CartItem[]>( 'book-cart', []);
    const cartQuantity = cartItems.length;

    const [isOpen, setIsOpen] = useState(false)
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function addToCart(book:CartItem) {
        setCartItmes((currItems : any) => {
            const id = book.id
            const title = book.title
            const imgBase64 = book.imgBase64
            const ISBN = book.ISBN
            if(currItems?.find((item:any) => item.id === id) == null){
                return [...currItems, { id, title, imgBase64, ISBN:ISBN}]
            } else {
                return currItems.map((item:any) => {
                    if(item.id === id){
                        return { ...item }
                    } else { 
                        return item
                    }
                })}})
    }

    function removeFromCart(id:number){
        setCartItmes((currItems:any) => {
            return currItems.filter((item: any) => item.id !== id)
        })
    }

    return (
        <CartContext.Provider value={{addToCart, removeFromCart, cartItems, cartQuantity, openCart, closeCart}}>
            {children}
            <Cart isOpen={isOpen}/>
        </CartContext.Provider>
    )
}