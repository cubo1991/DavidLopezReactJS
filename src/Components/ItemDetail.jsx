import React, {useState, useContext} from 'react'
import {Card, Button} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import ItemCount from './ItemCount';



const ItemDetail = ({ProductDetail}) => {
  const {productoExistente, addProducto} = useContext(CartContext)
  const initial = 1
 

  
  const {title, price, stock, pictureUrl, id} = ProductDetail
    const Navigate = useNavigate()
    const [cantidad, setCantidad] = useState(initial);
    const productoCarrito = {
    id,
    title,
    price,
    stock,
    pictureUrl,
    cantidad,
  }
  
  
  const onAdd = () => {
    if (cantidad === 1) {
      
      addProducto(productoCarrito)
      
      
      return;
    }
    // eslint-disable-next-line no-lone-blocks
    {
      
      addProducto(productoCarrito)
    
    };
    
   
    
  };

    const volver = () => {Navigate (-1)}
 if(stock > 0){ return (
  <div>
  <div className='d-flex justify-content-around'>
       <Card style={{ width: '15rem' }}>
<Card.Img variant="top" src={pictureUrl} />
<div className='d-flex block'>
<Card.Body>
  <Card.Title  className='mr-4'>{title}</Card.Title>
  <hr/>
  <Card.Text >
    <div className='d-flex justify-content-around'>
    <b>Precio $ {price}</b>                                                                                         
    <b>Stock: {stock}</b>
    
    </div>

  </Card.Text> 
    </Card.Body>
    </div>
</Card>

{
!productoExistente(id)
?
<ItemCount onAdd={onAdd} cantidad={cantidad} initial={initial} stock={stock} setCantidad={setCantidad }/> 
:
<div>
<Link to="/cart"><button className="btn btn-success tamañoCantidad mt-2"  > Ir al carrito </button></Link>
<Link to="/"><button className="btn btn-warning tamañoCantidad mt-2"  > Seguir comprando </button></Link>
</div>
}

</div>



<Button className="btn  btn-ouline-primary tamañoCantidad" onClick={volver}> Volver</Button></div> 
)} else {
  return (
    <div>
    <div className='d-flex justify-content-around'>
         <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={pictureUrl} />
  <div className='d-flex block'>
  <Card.Body>
    <Card.Title  className='mr-4'>{title}</Card.Title>
    <hr/>
    <Card.Text >
      <div className='d-flex justify-content-around'>
                                                                                          
      <b className='agotado'>SIN STOCK</b>
      
      </div>

    </Card.Text> 
      </Card.Body>
      </div>
</Card>





</div>



<Button className="btn  btn-ouline-primary tamañoCantidad" onClick={volver}> Volver</Button></div> 
  )
}
}

export default ItemDetail
