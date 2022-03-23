import React from 'react'
import {Card} from 'react-bootstrap';

const Items = ({producto}) => {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={producto.pictureUrl} />
  <Card.Body>
    <Card.Title>{producto.title}</Card.Title>
    <Card.Text>
      <p>Estás a {producto.price} de que sea tuyo</p>
    </Card.Text> 
      </Card.Body>
</Card>
  )
}

export default Items