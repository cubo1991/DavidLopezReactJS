import React  from "react";

import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai'



const ItemCount = ({onAdd, cantidad, setCantidad, initial, stock, id}) => {
 
  
  
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
        <h2>Cantidad</h2>
        <div className= "div-contador"> 
        <AiOutlineMinusCircle size={50} onClick={() => clickRest("restar")} />  
        
       <p className="tamañoCantidad" >{cantidad}</p>
        
        <AiOutlinePlusCircle size={50} onClick={() => clickSum("sumar")} />  
       <button className="btn btn-success tamañoCantidad" onClick={() => onAdd()}>Agregar al carro</button>
      
      </div>
      </div>
    
  );
  
};

export default ItemCount;
