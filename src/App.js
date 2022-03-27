//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"



//let stock = 5
//const initial = 1



function App() {
  return (
   <BrowserRouter> 
   <Navbar className="App-header" />   <Routes>
   
    <Route path="/" element= {<ItemListContainer/> }/>
    <Route path="/" element= {<ItemDetailContainer />}/> 
    
    
      
      
      
      
      
      
      
        
      
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
