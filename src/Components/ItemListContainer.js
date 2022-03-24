import React, {useState, useEffect} from 'react' 
import "bootstrap/dist/css/bootstrap.min.css"
import ItemsList from "./ItemsList"
import { getItems } from '../mocks/miApi'

const ItemListContainer = () => {
    const [listaDeProductos, setlistaDeProductos] = useState([]);
   
    ;
  
    useEffect(() => {
      getItems
        .then((res) => setlistaDeProductos(res))
        .catch((err) => console.log('error',err));
    }, []);
    return (
        <div>
           
            <ItemsList listaDeProductos={listaDeProductos} />
        </div>
    )
  };

export default ItemListContainer