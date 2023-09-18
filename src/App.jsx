import './App.css'
import  NavBar  from './components/NavBar/NavBar';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import { useState } from 'react';
import React,{useEffect} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from './services/firebase/firebaseConfig';
import {list} from "./mock/data"
import Checkout from './components/Checkout/Checkout';
import Contacto from './components/Contacto/Contacto';


function App() {
  // useEffect(()=>{
  //   const colectionProductos = collection(firestore,"items")
  //   list.map((item) => addDoc(colectionProductos,item))
  //   },[] )

  return (
    <CartProvider >
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer /> } />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos a la categoria: "/> } />
            <Route path='/item/:id' element={<ItemDetailContainer/> } />
            <Route path='/cart' element={<Cart greeting= {'Tu Carrito'} />} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/contacto' element={<Contacto/>} />

            
          </Routes>
      </BrowserRouter>
    </CartProvider>
  
  )
}

export default App;
