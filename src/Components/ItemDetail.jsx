import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({ProductDetail}) => {
  const initial = 1
  
  const {title, price, stock, pictureUrl} = ProductDetail
    const Navigate = useNavigate()
    const [cantidad, setCantidad] = useState(initial);
    
  
  const onAdd = () => {
    if (cantidad === 1) {
      alert(`Has agregado ${cantidad} producto al carrito`);
      
      return;
    }
    {
      alert(`Has agregado ${cantidad} productos al carrito`);
    
    }
   
    
  };

    const volver = () => {Navigate (-1)}
  return (
    <div>
    <div className='d-flex justify-content-around'>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pictureUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      <p>Precio {price} </p>
      <p>Stock disponible: {stock}</p>
    </Card.Text> 
      </Card.Body>
</Card>
<ItemCount onAdd={onAdd} cantidad={cantidad} initial={initial} stock={stock} setCantidad={setCantidad }/>
</div>
<Button className="btn  btn-ouline-primary" onClick={volver}> Volver</Button></div> 
  )
}

export default ItemDetail
