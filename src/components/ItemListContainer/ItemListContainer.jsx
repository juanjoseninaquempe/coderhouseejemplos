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
            //si tiene categoria osea categoryId es query(collection(firestore,"items"),where( "category","==",categoryId )y si no tiene eso serian todos los componentes collection(firestore,"items") 
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
            : <div  >
                <h1><span>{categoryId && categoryId} </span> </h1>
                <img className="logo" src="https://i.postimg.cc/rsKLcsVQ/icons8-welcome-64.png" alt="bienvenidos" />
                <ItemList productos = {productos} />
            </div>
             }
        </div>
    )

}

export default ItemListContainer;