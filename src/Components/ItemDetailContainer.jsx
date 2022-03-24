import React, {useEffect, useState }  from 'react'
import { getItems } from '../mocks/miApi'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [ProductDetail, setProductDetail] = useState({})
    
    useEffect(()=>{
        getItems
        .then((res) => setProductDetail(res.find((item)=> item.id === 3)))
        .catch((error) => console.log(error))
        
    }, [])

   
  return (
    <div>
        { ProductDetail ? <ItemDetail ProductDetail={ProductDetail}/> : ''}
        
    </div>
  )
}

export default ItemDetailContainer