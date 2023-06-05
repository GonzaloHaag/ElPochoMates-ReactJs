import React, { useContext } from 'react'

import { FaCartPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../Hojas_css/cardCarrito.css'
const CardCarrito = () => {

const {cantidadEnCarrito} = useContext(CartContext);
  return (
    <li className='card-carrito-container'>
    <Link className='link' to="/carrito">Carrito
    <FaCartPlus className='icon-cart' /> <span className='numerito'>{cantidadEnCarrito()}</span> 
    </Link>
    
</li>
  )
}

export default CardCarrito