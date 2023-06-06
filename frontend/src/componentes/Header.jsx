import React, { useEffect, useState } from 'react'
import { FaBars,FaSearch} from 'react-icons/fa';
import '../Hojas_css/header.css'
import Navbar from './Navbar';
import { Link,useLocation} from 'react-router-dom';



const Header = () => { 
  const [isOpen,setIsOpen] = useState(false); //Para saber si esta abierto o cerrado el navbar
  const desplegarMenu = () => {
    setIsOpen(!isOpen); //Solo se encarga de poner el valor contrario
}
  const cerrarMenu = () => {
  setIsOpen(false); //Para que lo pase a false y me cierre el menu
}

const [tituloHeader,setTituloHeader] = useState("Inicio"); //Que arranque en inicio
const location = useLocation(); //Me da la url donde estoy parado
useEffect(() => {
  // Determinar el título según la URL actual
  switch (location.pathname) {
    case '/quienes-somos':
      setTituloHeader('Quiénes Somos');
      break;
    case '/productos' : 
    setTituloHeader('Productos');
    break;
    case '/productos/mates' : 
    setTituloHeader('Mates');
    break;
    case '/productos/mates-pampa' : 
    setTituloHeader("Mates pampa");
    break;
    case '/productos/mates-imperial' : 
    setTituloHeader('Mates Imperiales');
    break;
    case '/productos/combos' : 
    setTituloHeader('Combos');
    break;
    case '/contacto':
      setTituloHeader('Contacto');
      break;
    case '/venta-por-mayor':
      setTituloHeader('Ventas por Mayor');
      break;
      case '/carrito':
        setTituloHeader('Carrito');
        break;
    default:
      setTituloHeader('Inicio');
      break;
  }
}, [location]); //Para actualizarlo cada vez que cambie la url, -> SUPER IMPORTANTE


  return (
    <div className='header-container'>
        <div className='header-top'>
            <div className='header-left'>
                <FaBars className='open-menu' onClick={desplegarMenu}/>
                <nav className={`navbar-mobile ${isOpen ? 'active' : null}`}>
                  {/*Estoy buscando que a navbar mobile se le agregue la clase
                  active solo si isOpen es true(cuando el menu esta abierto)*/}
                  <svg onClick={cerrarMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                  <ul>
                    <li onClick={cerrarMenu}><Link className='nav-link' to="/quienes-somos">Quiénes Somos</Link></li>
                   
                    <li onClick={cerrarMenu}><Link className='nav-link' to="/contacto">Contacto</Link></li>
                    
                    <li onClick={cerrarMenu}><Link className='nav-link' to="/venta-por-mayor">VENTAS POR MAYOR</Link></li>
                    
                  </ul>
                </nav>
                <p className='title-header'>{tituloHeader}</p>
                </div>
                <FaSearch/>

        </div>
        <Navbar/>
        <section className='logo'>
          {/*Como el logo esta en public, lo puedo usar directamente*/}
         <img src="images/Logo.jpg" alt='logo-pagina' />
        </section>

      
    </div>
  )
}

export default Header