 
 // ESTO ES EL ICONO CARRITO DE LA ESQUINAAAA!!!!!!!!!!!!!!!
 
 
 import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
  import Button from "@mui/material/Button" 

function CartWidget () {

    const {cantidadEnCarrito} = useContext(CartContext)

    return (
         <div>
            <Link className="menu-link" to="/cart" style={ {display: cantidadEnCarrito() >  0 ? "block" : "none"} } >
                <Button>
                <span className="numerito">{cantidadEnCarrito()}</span>
                <img src="https://i.postimg.cc/R0nZBP0j/carrito-svg.gif" alt="carrito" />
                </Button>
            </Link>
         </div>
    )
}

export default CartWidget