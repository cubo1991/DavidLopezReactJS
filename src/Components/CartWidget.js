import React, {useContext}from 'react' 
import LogoCarrito from '../Imagenes/Carrito.png'
import { Link } from 'react-router-dom'
import { CartContext } from './Context/CartContext'


const CartWidget = () => {
    const { totalCarrito, carrito} = useContext(CartContext);
    const styles = {
        tamaño: {height: 50,
        width: 50},
        tamañoNavBar: { width: 1366},
        marginRight: {marginRight:40},
        
        
        
      
      
      
      
      }
    return ( 
       carrito.lenght === 0 
        ? 
        ""
        :
        <div className="flex-column">
        <Link to="/Cart"> <img className='marginRight' src={LogoCarrito} style={styles.tamaño} /> </Link>
        <p> {totalCarrito()} </p>
        </div>
     ) 
}

export default CartWidget
