import React from 'react'
import Item from './Item'
import '../Hojas_css/itemList.css'

const ItemList = ({productos}) => {
  return (
    <div>
        {/* <h2>Titulo de categoria</h2> */}
        <div className='productos'>
            {
                productos.map((producto)=>(
                    <Item producto = {producto} key={producto.id}/>
                    /*Cada item va a recibir este producto
                y item se encargara de hacerle un map y mostrar precio titulo descripcion e imagen*/
                ))
            }
        </div>
    </div>
  )
}

export default ItemList