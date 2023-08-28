import React,{ useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../../mock/data"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState({})
    const [loader, setLoader] = useState(false)
    const {id}= useParams()

    useEffect (() => {
        setLoader(true)
        getItem(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
        .finally(()=> setLoader(false))
    },[])

    return (
        <div>
            { loader ? <p>Cargando ...</p> : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer