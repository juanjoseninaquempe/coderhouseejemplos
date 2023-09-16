import React,{ useContext, useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import {getProducts} from "../../mock/data"
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import { getDocs,collection,query,where } from "firebase/firestore"
import { firestore } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({greeting}) => {
    const [productos,setProductos]= useState([])
    const [loading,setLoading]= useState(false)
    const {categoryId}=useParams()

        useEffect(() => {

            setLoading(true)

            const collectionRef = categoryId
                ? query(collection(firestore,"items"),where( "category","==",categoryId ))
                : collection(firestore,"items")

                getDocs(collectionRef)
                .then((res) => { 
                        const productsAdated = res.docs.map( doc => {
                            const data = doc.data()
                            return {id: doc.id, ...data }
                    })
                        setProductos(productsAdated)
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        },[categoryId])

    return (
        <div >
            {
            loading ? <p>Cargando ...</p>
            : <div>
                <h1>{greeting} <span>{categoryId && categoryId} </span> </h1>
                <ItemList productos = {productos} />
            </div>
             }
        </div>
    )

}

export default ItemListContainer;