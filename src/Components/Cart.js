import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";




export const Cart = () => {
  const { carrito, removeProducto, limpiarCarrito , precioTotal } = useContext(CartContext);
  
  
  if (carrito.length < 1){
  
  return (
    <div>
    <h2>Todavía no has puesto nada en el carrito</h2>
    <Link to="/">
      <button className="btn btn-success">Empezá a comprar ya</button>
    </Link>
    
    </div>
    );}
   // eslint-disable-next-line no-lone-blocks
   {
    return (
      <div>
        
        <h2 className="ms-5"> Carro de compra </h2>
        
        
        <hr   className="mt-5"/>
  
        {
          carrito.map((item) => (
            <div className="me-3 ms-3" key={item.id}>
              <h2>{item.title}</h2>
              <h3>Precio: ${item.price}</h3>
              <h3>Cantidad: {item.cantidad}</h3>
              <button className="btn btn-danger me-3"  onClick={() => removeProducto(item.id)}>Quitar este producto</button>
              
            </div>
            
            
          ))}
          <hr/>
  
          <button className="btn btn-danger me-3 ms-3"  onClick={() => limpiarCarrito()}>Quitar todos los productos</button>
          <Link to="/Checkout" className="btn btn-success">Terminar mi compra</Link>
          <h2>Total: ${precioTotal()}</h2>
      </div>
      
      
    )
  }
 
};
