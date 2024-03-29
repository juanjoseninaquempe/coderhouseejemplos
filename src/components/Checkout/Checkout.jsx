import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc} from "firebase/firestore";
import { firestore } from "../../services/firebase/firebaseConfig"; 
import { Button } from "react-bootstrap";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { cartArray,totalPrecio,clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm()
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cartArray,
            total: totalPrecio()
        }
        console.log(pedido)

        const pedidosRef = collection(firestore, "pedidos")

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id)
            clearCart()
        })
    }

    if(pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId} </p>
            </div>
        )
    }


    return (
        <div className="container">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <Button className="enviar" type="submit">Comprar</Button>

        </form>
    </div>
    )
}

export default Checkout