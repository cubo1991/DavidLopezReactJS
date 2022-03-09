import React from 'react' 
import "bootstrap/dist/css/bootstrap.min.css"


const Navbar = () => {
    return (<div><h1>Xero</h1>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Xero</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Comprar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Conocer más</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
     
     
    </ul>
 
  </div>
</nav>
 


    
  

    
    </div>)
}

export default Navbar