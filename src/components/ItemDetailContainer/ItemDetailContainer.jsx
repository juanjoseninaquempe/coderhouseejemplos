import React,{ useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../../mock/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { CartContext } from "../../context/CartContext"

import {getDoc, doc} from "firebase/firestore"
import { firestore } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState({})
    const [loader, setLoader] = useState(false)

    const [added,setAdded] = useState(false)

    const {id}= useParams()

    const { addToCart } = useContext(CartContext)

    useEffect (() => {
        setLoader(true)

        const docRef = doc(firestore, "items", id )

        getDoc(docRef)
        .then((res) =>  {
            const data = res.data()
            const productAdated = {id: res.id, ...data}
            setProducto(productAdated)
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoader(false))
    },[])

    const onAdd = (contador) => {
        addToCart(producto,contador)
        setAdded(true)
    }

    return (
        <div>
            { loader ? <p>Cargando ...</p> : <ItemDetail onAdd={onAdd} producto={producto} added={added}/>}
        </div>
    )
}

export default ItemDetailContainer