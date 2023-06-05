import React from 'react'
import { Link } from 'react-router-dom'
import '../Hojas_css/home.css'

const Item = ({producto}) => { //recibo producto que me envia itemList
    //ESTE COMPONENTE SE ENCARGA DE RECORRER EL ITEM Y MOSTRAR EL TITULO,PRECIO,IMAGEN Y LO QUE QUERAMOS
  return (
    <div className='producto'>
    {/*
    PARA PODER RECORRER EL PRODUCTO Y QUE APAREZCA LA IMAGEN 
    NECESITAMOS QUE LAS IMAGENES ESTEN DENTRO DE LA CARPETA PUBLIC
    */}
    <Link to={`/item/${producto.id}`}><img src={producto.imagen} alt={producto.titulo} /> </Link>
    {/*La imagen dentro de un link ya que quiero que cuando 
    se clickee, me lleve al detalle de ese producto*/}
    <div className='producto-detalles'>
        <h4>{producto.titulo}</h4>
        <p>${producto.precio}</p>
     

    </div>
    </div>
  )
}

export default Item