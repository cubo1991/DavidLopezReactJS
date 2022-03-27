import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ItemDetail = ({ProductDetail}) => {
    const {title, price, pictureUrl} = ProductDetail
    const Navigate = useNavigate()

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
    </Card.Text> 
      </Card.Body>
</Card>

</div>
<Button className="btn  btn-ouline-primary" onClick={volver}> Volver</Button> </div>
  )
}

export default ItemDetail
