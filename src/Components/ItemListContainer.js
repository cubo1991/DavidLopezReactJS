import React, {useState, useEffect} from 'react' 
import "bootstrap/dist/css/bootstrap.min.css"
import ItemsList from "./ItemsList"

const ItemListContainer = () => {
    const [listaDeProductos, setlistaDeProductos] = useState([]);
    const itemsData = [
      {
        id: '1', title: 'Remera', price: '$550', pictureUrl: 'https://picsum.photos/203', },
      {
        id: '2', title: 'Buzo', price: '$790', pictureUrl: 'https://picsum.photos/204', },
      {
        id: '3', title: 'Pantalon', price: '$1500', pictureUrl: 'https://picsum.photos/205', },
    ];
  
    const getItems = new Promise((resolve, reject) => {
        let condition = true;
        if (condition) {
          setTimeout(() => {
            resolve(itemsData);
          }, 2000);
        } else {
          reject(new Error ("No hay datos"));
        }
      });
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