import React, { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartArray,setCartArray] = useState([])


    const addToCart = (producto, contador ) => {
        if (isInCart(producto.id)){
            // const updatedObj = {

            // }
            console.log("ya esta el producto")
        }else {
            console.log(`Agregaste ${producto.name}, cantidad: ${contador} `)
            const newObj = {
                item: producto, 
                contador 
            }
            setCartArray([...cartArray, newObj])
        }
    }
    const deleteItem = (id) => {
         const updatedCart = cartArray.filter(element => element.item.id !== id)
        setCartArray(updatedCart)
    }

    const clearCart = () => {
        setCartArray([])
    }

    const isInCart = (id) => {
        return cartArray.some(element => element.item.id === id)
    }


    return (
        <CartContext.Provider value={{
            cartArray,
            addToCart,
            deleteItem,
            clearCart
        }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider