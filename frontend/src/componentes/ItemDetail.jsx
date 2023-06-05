import React, { useContext, useState } from 'react';
import '../Hojas_css/itemDetail.css';
import { ItemCount } from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {
  const [cantidad,setCantidad] = useState(1);

  const {agregarAlCarrito} = useContext(CartContext);

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }
  const handleSumar = () => {
    // cantidad < item.stock && setCantidad(cantidad + 1);
    //Para el caso que tenga stock, que corte la cantidad cuando llegue a ese stock disponible
    setCantidad(cantidad + 1);
  }
  return (
    <div className='container'>
        <img src={item.imagen} alt = {item.titulo} />
        <div className='producto-detalles'>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <span>${item.precio}</span>
            <ItemCount cantidad = {cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={()=>{agregarAlCarrito(item,cantidad)}} />
            <Link className='seguir-comprando-link' to="/productos">
            <button className='seguir-comprando'>Ver más productos
            </button>
            </Link>

        </div>

    </div>
  )
}

export default ItemDetail