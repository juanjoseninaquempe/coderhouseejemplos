import React, { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({producto}) => {

    const {addToCart} = useContext(CartContext)

    const [count,setCount] = useState (1)

    const sumar = () => {
        if( count < producto.stock){
            setCount(count +1)
        }
    }
    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }

    const onAdd = (count) => {
        addToCart(producto,count)
        console.log(`Compraste ${count} productos`)
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <h3>Detalle de: {producto.name} </h3>
            <img src={producto.img} alt={producto.name} />
            <p>{producto.description} </p>
            <p>${producto.price} </p>
            <ItemCount count={count} restar={restar} sumar={sumar} onAdd={onAdd} />
            <Link to='/cart' className='btn btn-outline-secondary m-3'>Ir al Carrito</Link>
        </div>
    )
}

export default ItemDetail