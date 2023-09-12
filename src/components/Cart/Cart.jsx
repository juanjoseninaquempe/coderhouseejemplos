import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () =>  {

    const { cartArray } = useContext(CartContext)

    return 
    (
    <div>
        {cartArray.map(prods => <p>{prods.item.name}</p> )}
    </div>
    )
}

export default Cart