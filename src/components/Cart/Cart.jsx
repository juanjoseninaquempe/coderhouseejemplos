 import React from "react"
import {useContext} from "react"
import { CartContext } from "../../context/CartContext"
 import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () =>  {

    const { cartArray,deleteItem } = useContext(CartContext);

    // if(cartArray.length=== 0) {
    //     return (
    //         <div>
    //         <p>No hay productos aun</p>
    //         <Link to="/">ir al Inicio</Link>           
    //          </div>
    //     )
    // }

    return  (
    <div>
        {cartArray.length === 0 &&
         <div>
                  <p>No hay productos aun</p>
                  <Link to="/">ir al Inicio</Link>           
         </div>
        }
        {(cartArray.length > 0) && cartArray.map(prods => <CartItem key={prods.item.id} producto={prods} deleteItem={deleteItem} /> )}
    </div>
    )
}

export default Cart