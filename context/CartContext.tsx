import React, { createContext, useContext, useState } from "react";

type CartItem = {
    id:number,
    title:string,
    quantity:number
}

type CartContext = {
    getBookQuantity: (id :number) => number
    addToCart: (id:number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const CartContext = createContext({} as CartContext)

export function useCart(){
    return useContext(CartContext)
}

export function CartProvider( {children}:any ){
    const [cartItems, setCartItmes] = useState<CartItem[]>([]);
    const cartQuantity = cartItems?.reduce((quantity:any, item:any) => item.quantity + quantity, 0)

    function getBookQuantity(id: number) {
        return cartItems?.find(item => item.id === id)?.quantity || 0
    }

    function addToCart(id: number) {
        setCartItmes((currItems : any) => {
            if(currItems?.find(item => item.id === id) == null){
                return [...currItems, { id, quantity : 1}]
            } else {
                return currItems.map(item => {
                    if(item.id !== id){
                        return item
                    }
                })
            }
        }
        )
    }

    function removeFromCart(id:number){
        setCartItmes((currItems:any) => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <CartContext.Provider value={{getBookQuantity, addToCart, removeFromCart, cartItems, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}