import React from "react"
import {useContext} from "react"
import { CartContext } from "../../context/CartContext"
 import CartItem from "../CartItem/CartItem";

const Cart = () =>  {

    const { cartArray,deleteItem } = useContext(CartContext);



    return  (
    <div>
        {/* {cartArray.map(prods => <p>{prods.item.name} </p> )} */}

        {cartArray.map(prods => <CartItem key={prods.item.id} producto={prods} deleteItem={deleteItem} /> )}

    </div>
    )
}

export default Cart