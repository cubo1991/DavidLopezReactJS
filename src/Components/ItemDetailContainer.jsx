import React, {useEffect, useState }  from 'react'
import { getItems } from '../mocks/miApi'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [ProductDetail, setProductDetail] = useState({})
    const [cargando, setCargando] = useState (false)
    useEffect(()=>{
      setCargando(true)
        getItems
        .then((res) => setProductDetail(res.find((item)=> item.id === 3)))
        .catch((error) => console.log(error))
        .finally(() => {setCargando(false)})
        
    }, [])

   
  return (
    <div>
        { cargando ? <p>Cargando...</p>: <ItemDetail ProductDetail={ProductDetail}/> }
        
    </div>
  )
}

export default ItemDetailContainer