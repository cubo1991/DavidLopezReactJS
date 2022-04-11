import React, {useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/config'
import { getItems } from '../mocks/miApi'
import ItemDetail from './ItemDetail'
import stock from './stock'
import {doc, getDoc} from "firebase/firestore"


const ItemDetailContainer = () => {
    const [ProductDetail, setProductDetail] = useState({})
    const [cargando, setCargando] = useState (true)
    const {ItemId} = useParams()
    
    useEffect(()=>{
      setCargando(true)
      const docRef = doc(db, "productos", ItemId)  
      getDoc(docRef)
      .then(doc => {
        const producto = {id:doc.id, ...doc.data()}
        setProductDetail(producto)
      
      })
      .finally(() =>{
        setCargando(false)
      })
      
        
    }, [ItemId])

   
  return (
    <div>
        { cargando ? <p>Cargando...</p>: <ItemDetail ProductDetail={ProductDetail}/> }
        
    </div>
  )
}

export default ItemDetailContainer