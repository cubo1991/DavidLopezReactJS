import React from 'react'
import Items from './Items'

const ItemsList = ({listaDeProductos}) => {
  return (
    <div>
        {listaDeProductos.map((producto) => <Items producto={producto} key={producto.id}/>)}
        </div>
  )
}
export default ItemsList
