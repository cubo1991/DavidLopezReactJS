import {useContext, useState} from 'react'
import { db } from '../firebase/config';
import { CartContext } from './Context/CartContext';
import {query, where, documentId, writeBatch ,collection, addDoc, Timestamp, getDocs } from 'firebase/firestore';
import { Navigate, Link } from 'react-router-dom';
export const Checkout = () => {

    const {carrito, totalCarrito, limpiarCarrito} = useContext(CartContext);

    const [orderId, setOrderId] = useState(null)
    
  const [values, setValues] = useState(
      {
          nombre: '',
          email: '',
          teléfono: '',
      }
  )

  const handleInputChange = (e) => {
      
        setValues({
            ...values, 
            [e.target.name] : e.target.value
        }) 
      
   }



    const handleSubmit = async (e) =>{
        e.preventDefault()
        const orden = {
            items: carrito,
            total: totalCarrito(),
            comprador: {...values},
            FechayHora: Timestamp.fromDate(new Date()),
           
        }
       
        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')
        const q = query(productosRef, where(documentId(), 'in', carrito.map((item) => item.id)))
        const productos = await getDocs(q)
        const sinStock = []

        productos.docs.forEach((doc) =>{
            const itemInCart = carrito.find((item) => item.id === doc.id)

            if(doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                sinStock.push(itemInCart)
            }
        })

        if (sinStock.length === 0) {
            addDoc(ordersRef, orden)
        .then((doc) => {
            batch.commit()
            setOrderId(doc.id)
            limpiarCarrito()
        })
           
        } else {alert ('Atención, hay algunos items fuera de stock')}
    
    
        
    }
    if (orderId) {
        return <div className="container my-5">
                    <h2>¡Gracias por tu compra!</h2>
                    <hr/>
                    <h4>Guardá tu número de orden: {orderId}</h4>
                    <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
    }

if(carrito.length === 0){
    return <Navigate to="/"/>
}

if(values.nombre.length === 0 || values.email.lenght === 0 || values.teléfono.length === 0){
    return (
        <div className='container my-5'><h2>Checkout</h2>
        <hr/>
        <form onSubmit={handleSubmit}>
            <input 
            className="form-control my-2"
            type={'text'}
            placeholder="Nombre"
            value={values.nombre}
            name='nombre'
            required
           onChange={handleInputChange}
            />
            <input 
            className="form-control my-2"
            type={'email'}
            placeholder="Dirección de Correo"
            value={values.email}
            name='email'
            required
            onChange={handleInputChange}
            />
            <input 
            className="form-control my-2"
            type={'tel'}
            placeholder="Teléfono"
            value={values.teléfono}
            name='teléfono'
            pattern="[0-9]*"
            required
            onChange={handleInputChange}
            />
    
           
         
          
          
    
    
        </form>
    
    
    
        </div>
        
      )
} else 
 { return (
    <div className='container my-5'><h2>Checkout</h2>
    <hr/>
    <form onSubmit={handleSubmit}>
        <input 
        className="form-control my-2"
        type={'text'}
        placeholder="Nombre"
        value={values.nombre}
        name='nombre'
        required
       onChange={handleInputChange}
        />
        <input 
        className="form-control my-2"
        type={'email'}
        placeholder="Dirección de Correo"
        value={values.email}
        name='email'
        required
        onChange={handleInputChange}
        />
        <input 
        className="form-control my-2"
        type={'tel'}
        placeholder="Teléfono"
        value={values.teléfono}
        name='teléfono'
        pattern="[0-9]*"
        required
        onChange={handleInputChange}
        />

       
     
      
      <button className='btn btn-success' type="submit">Enviar</button>


    </form>



    </div>
    
  )}
  
}
