import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";

export const Cart = () => {
  const { carrito } = useContext(CartContext);
  console.log(carrito);
  return (
    <div>
      <h2> Carrito </h2>

      {carrito.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <h3>Precio: {item.price}</h3>
        </div>
      ))}
    </div>
  );
};
