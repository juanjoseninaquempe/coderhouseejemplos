import './App.css'
import { NavBar } from './components/NavBar';
import ItemListContainer  from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
     <ItemListContainer greeting="Bienvenidos a Tienda Shaolin S.R.L."/> 
    </>
  )
}

export default App;
