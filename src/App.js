//import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {Contacto} from './Components/Contacto'
import {Nosotros} from './Components/Nosotros'
import {Cart} from './Components/Cart'
import {CarritoProvider} from './Components/Context/CartContext'
import {Checkout} from './Components/Checkout'







function App() {

  
  
  return (
   <CarritoProvider>
 <BrowserRouter> 
   <Navbar className="App-header" />   
   <Routes>
   
    <Route path="/" element= {<ItemListContainer/> }/>
    <Route path="/Contacto" element= {<Contacto />}/> 
    <Route path="/Nosotros" element= {<Nosotros />}/> 
    <Route path="/Categoria/:CategoriaId" element={ <ItemListContainer/> }/>
    <Route path="/detalle/:ItemId" element={<ItemDetailContainer/>}/>
    <Route path="/Cart" element={<Cart/>} />
    <Route path="/Checkout" element={<Checkout/>} />
    
    
    
    <Route path="*" element = {<Navigate to="/"/>} />
    
    
      
      
      
      
      
      
      
        
      
    
    </Routes>
    </BrowserRouter>
   </CarritoProvider>
  
    
  );
}

export default App;
