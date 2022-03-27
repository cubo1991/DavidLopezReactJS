import React, {useState, useEffect} from 'react' 
import "bootstrap/dist/css/bootstrap.min.css"
import ItemsList from "./ItemsList"
import { getItems } from '../mocks/miApi'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [listaDeProductos, setlistaDeProductos] = useState([]);
    const [cargando, setCargando] = useState (false)
    const {CategoriaId} = useParams()
    
  
    useEffect(() => {
      setCargando(true)
      getItems
        .then((res) => {if (CategoriaId) {
          setlistaDeProductos( res.filter( (prod) => prod.categoria === CategoriaId ) )
      } else {
        setlistaDeProductos( res )
      }})
        .catch((err) => console.log('error',err))
        .finally(() => {
          setCargando(false)
        })
    }, [CategoriaId]);
    return (
        <div>
           
           { cargando ? <p>Cargando...</p> :<ItemsList listaDeProductos={listaDeProductos} />}
        </div>
    )
  };

export default ItemListContainer