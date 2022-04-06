import { useContext } from "react";
import { CartContext } from "./Context/CartContext";

export const Cart = () => {
  const { carrito, removeProducto, setCarrito, limpiarCarrito } = useContext(CartContext);
  console.log(carrito);
  
  
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
    </div>
    
    
  );
 
};
