import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} productos`)
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <h3>Detalle de: {producto.name} </h3>
            <img src={producto.img} alt={producto.name} />
            <p>{producto.description} </p>
            <p>${producto.price} </p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
            <Link to='/cart' className='btn btn-outline-secondary m-3'>Ir al Carrito</Link>
        </div>
    )
}

export default ItemDetail