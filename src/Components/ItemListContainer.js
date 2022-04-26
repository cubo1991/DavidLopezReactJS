import React, {useState, useEffect} from 'react' 
import "bootstrap/dist/css/bootstrap.min.css"
import ItemsList from "./ItemsList"

import { useParams } from 'react-router-dom'
import { LinearProgress } from '@mui/material'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

const ItemListContainer = () => {
    const [listaDeProductos, setlistaDeProductos] = useState([]);
    const [cargando, setCargando] = useState (false)
    const {CategoriaId} = useParams()
    
  
    useEffect(() => {
      setCargando(true)

      const productosRef = collection(db, "productos")
      const q = CategoriaId ? query(productosRef, where('categoria', '==', CategoriaId)) : productosRef
      getDocs(q) 
        .then(resp => {
          const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        
          setlistaDeProductos(items)
         })
         .finally(() => {
           setCargando(false)
         }
         )

    }, [CategoriaId]);
    return (
        <div>
           
           { cargando ? <LinearProgress size="250px"  /> :<ItemsList listaDeProductos={listaDeProductos} />}
        </div>
    )
  };

export default ItemListContainer