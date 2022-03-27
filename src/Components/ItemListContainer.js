import React, {useState, useEffect} from 'react' 
import "bootstrap/dist/css/bootstrap.min.css"
import ItemsList from "./ItemsList"
import { getItems } from '../mocks/miApi'

const ItemListContainer = () => {
    const [listaDeProductos, setlistaDeProductos] = useState([]);
    const [cargando, setCargando] = useState (false)
   
    ;
  
    useEffect(() => {
      setCargando(true)
      getItems
        .then((res) => setlistaDeProductos(res))
        .catch((err) => console.log('error',err))
        .finally(() => {
          setCargando(false)
        })
    }, []);
    return (
        <div>
           
           { cargando ? <p>Cargando...</p> :<ItemsList listaDeProductos={listaDeProductos} />}
        </div>
    )
  };

export default ItemListContainer