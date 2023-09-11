import './App.css'
import  NavBar  from './components/NavBar/NavBar';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenidos"/> } />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos a la categoria: "/> } />
            <Route path='/item/:id' element={<ItemDetailContainer/> } />
            <Route path='/cart' element={<Cart greeting= {'Tu Carrito'} />} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  
  )
}

export default App;
