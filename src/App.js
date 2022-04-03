//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {Contacto} from './Components/Contacto'
import {Nosotros} from './Components/Nosotros'
import {Cart} from './Components/Cart'
import {CartContext} from './Components/Context/CartContext'





function App() {

  const [carrito, setCarrito] = useState ([])
  
  const addProducto = (producto) =>{
  setCarrito([...carrito, producto])
  }

  console.log(carrito)
  
  
  
  return (
   <CartContext.Provider value={{carrito, setCarrito, addProducto}}>
   <BrowserRouter> 
   <Navbar className="App-header" />   
   <Routes>
   
    <Route path="/" element= {<ItemListContainer/> }/>
    <Route path="/Contacto" element= {<Contacto />}/> 
    <Route path="/Nosotros" element= {<Nosotros />}/> 
    <Route path="/Categoria/:CategoriaId" element={ <ItemListContainer/> }/>
    <Route path="/detalle/:ItemId" element={<ItemDetailContainer/>}/>
    <Route path="/Cart" element={<Cart/>} />
    
    
    <Route path="*" element = {<Navigate to="/"/>} />
    
    
      
      
      
      
      
      
      
        
      
    
    </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
