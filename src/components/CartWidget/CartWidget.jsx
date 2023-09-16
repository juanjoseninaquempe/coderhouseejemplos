 
 // ESTO ES EL ICONO CARRITO DE LA ESQUINAAAA!!!!!!!!!!!!!!!
 
 
 import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
// import { Badge } from "react-bootstrap"
// import { BsCart3 } from "react-icons/bs"

function CartWidget () {

    const {cantidadEnCarrito} = useContext(CartContext)

    return (
         <div>
            <Link className="menu-link" to="/carrito" style={ {display: cantidadEnCarrito() >  0 ? "block" : "none"} } >
                carrito
                <span className="numerito">{cantidadEnCarrito()}</span>
            </Link>
         </div>
    )
}

export default CartWidget