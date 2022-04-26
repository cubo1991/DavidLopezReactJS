

import React from 'react'

import XeroLogo from '../Imagenes/XeroLogo.png'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CartWidget from './CartWidget'




const styles = {
  tamaño: {
    height: 50,
    width: 50
  },
  tamañoNavBar: {
    width: 1366,
    height: 50
  },
  marginRight: { marginRight: 40 },







}
const Navbar = () => {
  return (<div>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary " style={styles.tamañoNavBar}>
        <Link to="/"><div className='marginLeft'><img src={XeroLogo} style={styles.tamaño} alt="Xero" /></div></Link>

        <div className="collapse navbar-collapse marginNavBar" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li >
              <Dropdown>
                <Dropdown.Toggle className="nav-link">
                  Indumentaria  </Dropdown.Toggle>

                <Dropdown.Menu>
                  <LinkContainer to="/Categoria/Remeras">
                    <Dropdown.Item>Remeras</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Categoria/Buzos">
                    <Dropdown.Item >Buzos</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Categoria/Pantalones">
                    <Dropdown.Item>Pantalones</Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Link className="nav-link" to="/Nosotros">Nosotros</Link>
            </li>
            <li>
              <Link className="nav-link" to="/Contacto">Contacto</Link>
            </li>


          </ul>

        </div>
        <CartWidget />

      </nav>
    </div>






  </div>)
}

export default Navbar