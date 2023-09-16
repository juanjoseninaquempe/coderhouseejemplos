import React, { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartArray,setCartArray] = useState([])


    const addToCart = (producto, contador ) =>  {  //cantidad quedo como contador
        if (isInCart(producto.id)){
            const arrayActualizado = cartArray.map(itemCart => {
                if (itemCart.item.id === producto.id) {
                    return { ...itemCart, contador: itemCart.contador + contador }
                } else {
                    return itemCart
                }
            })
            // cartArray.findIndex(viejacantidaddelmismoProducto => viejacantidaddelmismoProducto.contador+=contador)
            console.log("ya esta el producto")
            setCartArray(arrayActualizado)
             }
        else {
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

    const cantidadEnCarrito = () => {
        return cartArray.reduce((acc,prod) => acc = acc + prod.contador,0)
    }

     const totalPrecio = () => {
         return cartArray.reduce((acc,prod) => acc= acc + (prod.contador*prod.item.price),0 )
     }


    return (
        <CartContext.Provider value={{
            cartArray,
            addToCart,
            deleteItem,
            clearCart,
            cantidadEnCarrito,
            totalPrecio
        }}>
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider