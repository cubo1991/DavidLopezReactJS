import React, { useContext } from 'react'
import LogoCarrito from '../Imagenes/Carrito.png'
import { Link } from 'react-router-dom'
import { CartContext } from './Context/CartContext'



const CartWidget = () => {
  const { totalCarrito, carrito } = useContext(CartContext);
  const styles = {
    tamaño: {
      height: 30,
      width: 30,
      marginRight: 100,
      marginTop: 21
    },
    tamañoNavBar: { width: 1366 },
    marginRight: { marginRight: 40 },
    marginLeft: { marginLeft: 50 }







  }
  return (
    carrito.length === 0
      ?
      ""
      :
      <div className="flex-column"  >
        <Link to="/Cart"> <img src={LogoCarrito} style={styles.tamaño} alt="Carrito" /> </Link>

        <p className='ms-3 fw-bolder'> {totalCarrito()} </p>
      </div>
  )
}

export default CartWidget
