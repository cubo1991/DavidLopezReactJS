import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';



const ItemCount = ({onAdd, cantidad, setCantidad, initial, stock, id}) => {
  const {productoExistente, carrito} = useContext(CartContext)
  
  
  const clickSum = () => {
    if (cantidad === stock) {
      return;
    }
    
      setCantidad(cantidad + 1);
    
  };
  const clickRest = () => {
    if (cantidad === initial) {
      return;
    }
    
      setCantidad(cantidad - 1);
    
  };
  return (
    <div >
        <p>Producto</p>
        <div className= "div-contador"> 
       
        <button className="button-contador" onClick={() => clickRest("restar")}> - </button>
       <p className="cantidadAdd">{cantidad}</p>
        
        <button className="button-contador" onClick={() => clickSum("sumar")}> + </button>
       <button className="button-contador" onClick={() => onAdd()}>Agregar al carro</button>
      
      </div>
      </div>
    
  );
  
};

export default ItemCount;
