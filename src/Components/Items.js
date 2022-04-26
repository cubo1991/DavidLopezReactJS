import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Items = ({producto}) => {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img className='imagenesProductos' variant="top" src={producto.pictureUrl} />
  <Card.Body>
    <Card.Title>{producto.title}</Card.Title>
    <Card.Text>
      
      <Link to={`/detalle/${producto.id}`}><button className='btn btn-primary'> Ver más</button></Link>
    </Card.Text> 
      </Card.Body>
</Card>
  ) 
}

export default Items