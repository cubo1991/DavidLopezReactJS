

import React from 'react' 
import LogoCarrito from '../Imagenes/Carrito.png'
import ItemListContainer from './ItemListContainer'
import XeroLogo from '../Imagenes/XeroLogo.png'
import { Link } from 'react-router-dom'




const styles = {
  tamaño: {height: 50,
  width: 50},
  tamañoNavBar: { width: 1366},
  marginRight: {marginRight:40},
  
  
  




}
const Navbar = () => {
    return (<div>
     <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary " style={styles.tamañoNavBar}>
  <div className='marginLeft'><img src={XeroLogo} style={styles.tamaño}/></div>

  <div className="collapse navbar-collapse marginNavBar" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li >
        <Link className="nav-link" to="/">Comprar</Link>
      </li>
      <li>
        <Link className="nav-link" to="/">Conocer más</Link>
      </li>
      <li>
        <Link  className="nav-link" to="/Contacto">Contacto</Link>
      </li>
     
     
    </ul>
    
  </div>
  < div style={styles.marginRigh}>
    <img className='marginRight' src={LogoCarrito} style={styles.tamaño} />
  </div>
</nav>
</div>


    
  

    
    </div>)
}

export default Navbar