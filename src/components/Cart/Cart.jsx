 import React from "react"
import {useContext} from "react"
import { CartContext } from "../../context/CartContext"
 import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () =>  {

    const { cartArray,deleteItem,totalPrecio,clearCart } = useContext(CartContext);

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
        { cartArray.map(prods => <CartItem key={prods.item.id} producto={prods} deleteItem={deleteItem} totalPrecio={totalPrecio}/>)}
       { <h3> Total : {totalPrecio()} </h3>  }
       <Button onClick={ () => clearCart()}>Limpiar carrito </Button>
    </div>
    )
}

export default Cart