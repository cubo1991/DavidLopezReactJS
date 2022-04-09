import React, {useState, useContext} from 'react'
import {Card, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import ItemCount from './ItemCount';
import { LinkContainer } from 'react-router-bootstrap'


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
  
  console.log(productoExistente(id))
  const onAdd = () => {
    if (cantidad === 1) {
      alert(`Has agregado ${cantidad} producto al carrito`);
      addProducto(productoCarrito)
      
      
      return;
    }
    {
      alert(`Has agregado ${cantidad} productos al carrito`);
      addProducto(productoCarrito)
    
    };
    
   
    
  };

    const volver = () => {Navigate (-1)}
  return (
    <div>
    <div className='d-flex justify-content-around'>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pictureUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text >
      <div className='d-flex justify-content'>
      Precio $ {price} 
        
      Stock: {stock}
      </div>

    </Card.Text> 
      </Card.Body>
</Card>

{
  !productoExistente(id)
  ?
<ItemCount onAdd={onAdd} cantidad={cantidad} initial={initial} stock={stock} setCantidad={setCantidad }/> 
:
<LinkContainer to={'/cart'}><Button> Ir al carrito </Button></LinkContainer>
}

</div>



<Button className="btn  btn-ouline-primary" onClick={volver}> Volver</Button></div> 
  )
}

export default ItemDetail
