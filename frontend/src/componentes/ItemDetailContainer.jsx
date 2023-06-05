import React, { useEffect, useState } from 'react'
import { pedirProductoPorId } from '../funciones/pedirProductos';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item,setItem] = useState(null); //Para saber si existe un item que coincida con ese id, arranca en null
    const id = useParams().id; //Para saber que id me llega en la url y pasarselo a mi funcion
    useEffect(()=>{
        pedirProductoPorId(Number(id)) //Le paso el id que estoy recibiendo desde la url, con useParams
        .then((res)=>{
            setItem(res); //Al item le seteo el valor de la respuesta asi lo puedo mostrar
        })
    },[id])
  return (
    <div>
        {item && <ItemDetail item={item} />} {/*Si existe ese item se lo quiero mandar al itemDetail para que lo recorra,sino no*/}
    </div>
  )
}

export default ItemDetailContainer