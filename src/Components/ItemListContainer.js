import React, {useState, useEffect} from 'react' 
import "bootstrap/dist/css/bootstrap.min.css"
import ItemsList from "./ItemsList"

const ItemListContainer = () => {
    const [listaDeProductos, setlistaDeProductos] = useState([]);
    const itemsData = [
      {
        id: 1, title: "Remera", price: "550", pictureUrl: "", },
      {
        id: 2, title: "Buzo", price: "790", pictureUrl: "", },
      {
        id: 3, title: "Pantalon", price: "1500", pictureUrl: "", },
    ];
  
    const getItems = () => {
      new Promise((resolve, reject) => {
        let condition = true;
        if (condition) {
          setTimeout(() => {
            resolve(itemsData);
          }, 2000);
        } else {
          reject(("No hay datos"));
        }
      });
    };
  
    useEffect(() => {
      getItems
        .then((res) => setlistaDeProductos('respuesta', res))
        .catch((err) => console.log('error')(err));
    }, []);
    return (
        <div>
            <h1>Titulo</h1>
            <ItemsList listaDeProductos={listaDeProductos} />
        </div>
    )
  };

export default ItemListContainer