import React from "react";
import { Link } from 'react-router-dom';


const ItemCount = ({onAdd, cantidad, setCantidad, initial, stock}) => {
  
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
        <p>Camisas Rojas</p>
        <div className= "div-contador"> 
        <button className="button-contador" onClick={() => clickRest("restar")}> - </button>
       <p className="cantidadAdd">{cantidad}</p>
        
        <button className="button-contador" onClick={() => clickSum("sumar")}> + </button>
       <Link to={'/cart'}> <button className="button-contador" onClick={() => onAdd()}>Agregar al carro</button></Link>
      </div></div>
    
  );
};

export default ItemCount;
