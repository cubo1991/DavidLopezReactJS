import React from 'react'
import {Card} from 'react-bootstrap';

const ItemDetail = ({ProductDetail}) => {
    const {title, price, pictureUrl} = ProductDetail
  return (
    <div className='d-flex justify-content-around'>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={pictureUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      <p>Precio {price} </p>
    </Card.Text> 
      </Card.Body>
</Card>
</div>
  )
}

export default ItemDetail
