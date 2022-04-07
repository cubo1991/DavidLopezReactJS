import { useContext } from "react";
import { CartContext } from "./Context/CartContext";

export const Cart = () => {
  const { carrito, removeProducto, setCarrito, limpiarCarrito, totalCarrito } = useContext(CartContext);
  console.log(carrito);
  
  if (carrito.lenght === 0){
  
  return (
    <p>Acá no hay nada</p>
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
              <h3>Precio: {item.price}</h3>
              <h3>Cantidad: {item.cantidad}</h3>
              <hr/>
              <button  onClick={() => removeProducto(item.id)}>Quitar este producto</button>
              
            </div>
            
            
          ))}
          <hr/>
  
          <button  onClick={() => limpiarCarrito()}>Quitar todos los productos</button>
          <h2>Total: {totalCarrito}</h2>
      </div>
      
      
    )
  }
 
};
