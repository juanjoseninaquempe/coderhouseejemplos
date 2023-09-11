import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function Cart  ()  {

    const { cartArray } = useContext(CartContext)

    return 
    (
    <div>
        {cartArray.map(prods => <p>{prods.item.title}</p> )}
    </div>
    )
}

export default Cart