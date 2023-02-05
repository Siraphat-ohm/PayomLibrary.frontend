import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number,
    title: string,
    ISBN: string,
    quantity: number
}

type CartContext = {
    addToCart: (book:CartItem) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const CartContext = createContext({} as CartContext);

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider( {children}: CartProviderProps ){
    const [cartItems, setCartItmes] = useLocalStorage<CartItem[]>( 'book-cart', []);
    const cartQuantity = cartItems.length;

    function addToCart(book:CartItem) {
        console.log(book)
        setCartItmes(currItems => {
            const id = book.id;
            const title = book.title;
            const ISBN = book.ISBN;
            if(currItems?.find((item:any) => item.id === id) == null){
                return [...currItems, { id, title, ISBN:ISBN} ]
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
        setCartItmes(currItems => {
            return currItems.filter((item: any) => item.id !== id)
        })
    }

    return (
        <CartContext.Provider value={{addToCart, removeFromCart, cartItems, cartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}