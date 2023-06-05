import React from 'react'
import '../Hojas_css/itemCount.css'

export const ItemCount = ({cantidad,handleRestar,handleSumar,handleAgregar}) => {
  return (
    <div className='itemCountContainer'>
    <div className='item-count'>
   
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p> {/*Para que aparezca el valor de cantidad*/}
        <button onClick={handleSumar}>+</button>
    </div>

    <button className='agregar-al-carrito' onClick={handleAgregar}>Agregar al carrito</button>
    
</div>
  )
}
