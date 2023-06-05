import { useLocation, useParams } from 'react-router-dom';
import {pedirProductos} from '../funciones/pedirProductos';
import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import '../Hojas_css/home.css'
import LogoCargando from './LogoCargando';




const ItemListContainer = () => {

const [productos,setProductos] = useState([]);
const categoriaUrl = useParams().categoria; //Para agarrar la categoria que viene en la url
const location = useLocation();
const url = location.pathname;
const esPaginaProductos = url.includes('/productos'); //Si esto es true, significa que estoy en la pagina de productos -> SUPER INTERESANTE, PODEMOS HACER MUCHAS COSAS
const esPaginaDeMates = url.includes('/productos/mates');
const [cargando,setCargando] = useState(true);


useEffect(()=> {
    pedirProductos()
    .then((res)=>{
        if(categoriaUrl) {
            setProductos (
                res.filter((prod)=> prod.categoria.nombre === categoriaUrl)
                /*
                mis productos tienen un categoria : {
                    nombre (nombre categoria)
                    id (mates) -> Aca quiero mostrar todos
                    Entonces aca quiero mostrar solo los que pertenecen a la categoria de mate pampa o imperial
                }
                */
            )
           
        }
        else if(esPaginaProductos) {
            setProductos(res); //Muestro los primeros 8 para cuando le den a cargar mas productos muestre todos
           
        }
        else if(esPaginaDeMates) {
            setProductos(
                res.filter((prod)=> prod.categoria.id === 'mates')
                /*Aca quiero mostrar todos los productos que pertenecen a mate*/
            )
        }
        else{
            setProductos(res.slice(0,8)); //Si no viene nada en la url, que me muestre todos los productos
            //Para mostrar los primeros 8 en la home y cuando pone ver todos los productos que muestre todos
            
        }
       
        setCargando(false); // Una vez que se cargan los productos, se actualiza el estado de carga
    })
 },[categoriaUrl,esPaginaDeMates,esPaginaProductos]);


  return (
    //ItemList se va a encargar de estos productos, por lo tanto debo pasarselo por props
    //Tambien le voy a enviar el titulo a itemList
    <div className='productos-destacados'>
        
           {
           cargando ? (
            <LogoCargando />// Muestra el logo de carga mientras los productos se cargan
          ) : (
            <ItemList productos={productos} /> //Le paso los productos a itemList

    
            
          )}
         
        
       
    </div>
  );
};


export default ItemListContainer