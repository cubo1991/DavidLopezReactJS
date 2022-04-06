import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CarritoProvider = ({children}) => {

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
  
    return (
        <CartContext.Provider value={{carrito, setCarrito, addProducto, removeProducto, limpiarCarrito, productoExistente}}>
                {children}
        </CartContext.Provider>
    )
}
 


