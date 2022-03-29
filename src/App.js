//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {Contacto} from './Components/Contacto'
import {Nosotros} from './Components/Nosotros'
import {Cart} from './Components/Cart'




//let stock = 5
//const initial = 1



function App() {
  return (
   <BrowserRouter> 
   <Navbar className="App-header" />   <Routes>
   
    <Route path="/" element= {<ItemListContainer/> }/>
    <Route path="/Contacto" element= {<Contacto />}/> 
    <Route path="/Nosotros" element= {<Nosotros />}/> 
    <Route path="/Categoria/:CategoriaId" element={ <ItemListContainer/> }/>
    <Route path="/detalle/:ItemId" element={<ItemDetailContainer/>}/>
    <Route path="/Cart" element={<Cart/>} />
    
    
    <Route path="*" element = {<Navigate to="/"/>} />
    
    
      
      
      
      
      
      
      
        
      
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
