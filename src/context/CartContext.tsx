import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
    children: ReactNode
}

export type CartItem = {
    id: string
    title: string,
    ISBN: string,
    quantity: string,
    category: string
}

type CartContext = {
    addToCart: (book:CartItem) => void
    removeFromCart: (id:string) => void
    increaseCartQuantity: (id: string) => void
    decreaseCartQuantity: (id: string) => void
    clearCart: () => void
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
        setCartItmes(currItems => {
            const id = book.id;
            const title = book.title;
            const ISBN = book.ISBN;
            const category = book.category
            if(currItems?.find((item:any) => item.id === id) == null){
                return [...currItems, { id, title, ISBN, quantity: 1, category } ]
            } else {
                return currItems.map((item:any) => {
                    if(item.id === id){
                        return { ...item }
                    } else { 
                        return item
                    }
                })}})
    }

    function removeFromCart(id:string){
        setCartItmes(currItems => {
            return currItems.filter((item: any) => item.id !== id)
        })
    }

    function increaseCartQuantity(id: string) {
        setCartItmes((currItems:any) => {
          if (currItems.find((item:any) => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }]
          } else {
            return currItems.map((item:any) => {
              if (item.id === id) {
                return { ...item, quantity: Number(item.quantity) + 1 }
              } else {
                return item
              }
            })
          }
        })
      }
      function decreaseCartQuantity(id: string) {
        setCartItmes((currItems:any) => {
          if (currItems.find((item:any) => item.id === id)?.quantity === 1) {
            return currItems.filter((item:any) => item.id !== id)
          } else {
            return currItems.map((item:any) => {
              if (item.id === id) {
                return { ...item, quantity: Number(item.quantity) - 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      function clearCart(){
        setCartItmes([] as CartItem[])
      }
    return (
        <CartContext.Provider value={{addToCart, removeFromCart, cartItems, cartQuantity, increaseCartQuantity, decreaseCartQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}