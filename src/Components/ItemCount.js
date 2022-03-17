import React, { useState } from "react";


const ItemCount = ({ stock, initial }) => {
  const [cantidad, setCantidad] = useState(initial);
  
  const clickSum = () => {
    if (cantidad === stock) {
      return;
    }
    {
      setCantidad(cantidad + 1);
    }
  };
  const clickRest = () => {
    if (cantidad === initial) {
      return;
    }
    {
      setCantidad(cantidad - 1);
    }
  };
  const onAdd = () => {
    if (cantidad === 1) {
      alert("Has agregado " + cantidad + " producto al carrito");
      
      return;
    }
    {
      alert("Has agregado " + cantidad + " productos al carrito");
    
    }
   
    
  };

  return (
    <div >
        <p>Camisas Rojas</p>
        <div className= "div-contador"> 
        <button className="button-contador" onClick={() => clickSum("sumar")}> + </button>
       <p className="cantidadAdd">{cantidad}</p>
        <button className="button-contador" onClick={() => clickRest("restar")}> - </button>
        <button className="button-contador" onClick={() => onAdd()}>Agregar al carro</button>
      </div></div>
    
  );
};

export default ItemCount;
