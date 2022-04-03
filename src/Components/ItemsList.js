import React from 'react'
import Items from './Items'

const ItemsList = ({listaDeProductos}) => {
  return (
    <div className='d-flex justify-content-around'>
        {listaDeProductos ? listaDeProductos.map((producto) => <Items producto={producto} key={producto.id} />): ''}
        </div>
  )
}
export default ItemsList
