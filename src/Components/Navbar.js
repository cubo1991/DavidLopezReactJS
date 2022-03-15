import React from 'react' 
import LogoCarrito from '../Imagenes/Carrito.png'

const styles = {
  tamaño: {height: 50,
  width: 50}


}
const Navbar = () => {
    return (<div><h1>Xero</h1>
    <img src={LogoCarrito} style={styles.tamaño} />
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Xero</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Comprar</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Conocer más</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacto</a>
      </li>
     
     
    </ul>
 
  </div>
</nav>
 


    
  

    
    </div>)
}

export default Navbar