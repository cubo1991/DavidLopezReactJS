import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";

import { Button } from "bootstrap";

export const Cart = () => {
  const { carrito, removeProducto, limpiarCarrito , precioTotal } = useContext(CartContext);
  console.log(precioTotal)
  
  if (carrito.length < 1){
  
  return (
    <div>
    <h2>Todavía no has puesto nada en el carrito</h2>
    <Link to="/">
      <button>Empezá a comprar ya</button>
    </Link>
    
    </div>
    );}
   {
    return (
      <div>
        <h2> Carrito </h2>
        <hr/>
  
        {
          carrito.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <h3>Precio: ${item.price}</h3>
              <h3>Cantidad: {item.cantidad}</h3>
              <hr/>
              <button  onClick={() => removeProducto(item.id)}>Quitar este producto</button>
              
            </div>
            
            
          ))}
          <hr/>
  
          <button  onClick={() => limpiarCarrito()}>Quitar todos los productos</button>
          <h2>Total: ${precioTotal()}</h2>
      </div>
      
      
    )
  }
 
};
