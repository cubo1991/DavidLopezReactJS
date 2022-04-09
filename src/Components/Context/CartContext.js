import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CarritoProvider = ({children}) => {

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc += prod.price * prod.cantidad, 0)
  }
  
    const [carrito, setCarrito] = useState ([])
  
  const addProducto = (producto) =>{
  setCarrito([...carrito, producto])
  }

  const removeProducto = (id) => {
    setCarrito( carrito.filter((prod) => prod.id !== id) )
  }
  
  const limpiarCarrito = () => {
    setCarrito([])
  }

  const productoExistente = (id) => {
    return carrito.some(prod => prod.id === id)

  }
  const totalCarrito =() => {
    return carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
  }
  
    return (
        <CartContext.Provider value={{carrito, setCarrito, addProducto, removeProducto, limpiarCarrito, productoExistente, totalCarrito, precioTotal}}>
                {children}
        </CartContext.Provider>
    )
}
 


