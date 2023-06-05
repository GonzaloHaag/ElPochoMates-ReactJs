import React, { useContext} from 'react'
import { CartContext } from '../context/CartContext'
import '../Hojas_css/carrito.css';
import axios from 'axios';



const Carrito = () => {

    const {carrito,precioTotal,vaciarCarrito} = useContext(CartContext); //me traigo carrito para mostrar los productos dentro del carrito, y la funcion para el total del carrito, y la funcion para vaciar el carrito

    const handleVaciar = () => {
        vaciarCarrito();
    }
  

    const handleFinalizarCompra = () => {
        const data = {
          carrito: carrito.map((prod) => ({
            titulo: prod.titulo,
            precio: prod.precio,
            cantidad: prod.cantidad,
          })),
          precioTotal: precioTotal(),
        };
      
        axios.post('http://localhost:3001/payment', data)
          .then((response) => {
            const initPoint = response.data.response.body.init_point; //dirige al init point de mp que es el pago
            window.open(initPoint, '_blank'); //Para abrirlo en otra pestaña
          })
          .catch((error) => {
            console.error(error);
          });
      };
  return (
    <div className='container'>
        <h1 className='main-title'> Tú Carrito</h1>
        {
            //Hago un map al carrito para mostrar lo que necesito de los productos en el carrito
            carrito.map((prod)=> ( 
                <div className='item-cart-container' key={prod.id}>
               
                <img src={prod.imagen} alt={prod.titulo} />
                <h2>{prod.titulo}</h2>
                <p>Cantidad : <span>{prod.cantidad}</span></p>
                <p className='price'>Precio: <span>${prod.precio * prod.cantidad}</span></p>
                <hr/>
                </div>
    
                
            ))
        }
        {
            carrito.length > 0 ?
            /*SI HAY ALGO EN EL carrito: */ 
            
            <div className='total-cart-container'> {/*para hacer 2 cosas luego del ? debo usar estas llaves*/}
            <h2 className='precio-total'>Precio total del carrito: ${precioTotal()}</h2>
            <div className='buttons-container'>
            <button onClick={handleVaciar}>VACIAR CARRITO</button>
            {/*ASI EL PRECIO TOTAL Y EL BOTON DE VACIAR CARRITO SE MOSTRARA SOLO SI HAY ALGUN PRODUCTO EN EL CARRITO*/}
            {/* <button>FINALIZAR COMPRA</button> */}
          <button onClick={handleFinalizarCompra}>Finalizar compra</button>
            </div>
            </div> :
            <h2 className='cart-vacio'>El carrito está vacio</h2> /*SI NO HAY NINGUN PRODUCTO EN CARRITO*/
        }

    </div>
  )
}

export default Carrito

