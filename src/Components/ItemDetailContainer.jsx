import React, {useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import { getItems } from '../mocks/miApi'
import ItemDetail from './ItemDetail'
import stock from './stock'


const ItemDetailContainer = () => {
    const [ProductDetail, setProductDetail] = useState({})
    const [cargando, setCargando] = useState (true)
    const {ItemId} = useParams()
    
    useEffect(()=>{
      setCargando(true)
        getItems
        .then((res) => setProductDetail(res.find((item)=> item.id === Number(ItemId))))
        .catch((error) => console.log(error))
        .finally(() => {setCargando(false)})

       console.log(stock)
        
    }, [])

   
  return (
    <div>
        { cargando ? <p>Cargando...</p>: <ItemDetail ProductDetail={ProductDetail}/> }
        
    </div>
  )
}

export default ItemDetailContainer