import React, {useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/config'
import ItemDetail from './ItemDetail'
import {doc, getDoc} from "firebase/firestore"
import { LinearProgress } from '@mui/material'


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
        { cargando ? <LinearProgress size="250px"  />: <ItemDetail ProductDetail={ProductDetail}/> }
        
    </div>
  )
}

export default ItemDetailContainer