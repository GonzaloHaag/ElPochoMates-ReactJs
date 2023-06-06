import React, { useEffect, useState } from 'react'
import '../Hojas_css/navbar.css';
import { Link } from 'react-router-dom';
import {FaHome,FaListUl} from "react-icons/fa";
import CardCarrito from './CardCarrito';

const Navbar = () => {

    const [catProductos,setCatProductos] = useState(false);
    const [navbarFixed,setNavbarFixed] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
            if (window.scrollY > 0) {
              setNavbarFixed(true);
             
            } else {
              setNavbarFixed(false);
            }
    };
    window.addEventListener('scroll',handleScroll);
    return() => {
        window.removeEventListener('scroll',handleScroll);
    };
},[]);

    const desplegarCategorias = () => {
        setCatProductos(!catProductos);
       
    }
    const [catMates,setCatMates] = useState(false);
    const mostrarCategoriasMates = () => {
        setCatMates(!catMates);
    }
    const handleCloseMenu = () => {
        setCatProductos(false);
        //Para que al clickear un li del nav se cierre mi menu
    }
    const closeCategoriasMates = () => {
        setCatMates(false);
    }

  return (
    // <nav className='navbar'>
    <nav className={`navbar ${navbarFixed ? 'fixed' : null} `}>
        <ul>
            <li>
                <Link className='link' to="/">Inicio
                <FaHome />
                </Link>
                {/*Luego en routes tengo que configurar que elemento debe aparecer cuando me dirigo a / */}
            </li>
            <li className='desplegarCategoriasDeProductos'>
                {/*Esto no es link, abre otro menu despegable*/}
                Productos 
                <FaListUl onClick={desplegarCategorias}/>
                {
                /*Si catProductos esta en true es porque el menu va a estar abierto*/ 
                catProductos && (
                    <nav className='navbar-categories'>
                        <ul>
                            <li onClick={handleCloseMenu}><Link className='nav-categories-link' to="/productos">VER TODOS LOS PRODUCTOS</Link> <hr/></li>
                            <li>MATES <svg onClick={mostrarCategoriasMates} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                      </svg>
                                      {
                                        catMates && (
                                            <nav className={`navbar-categories-mates ${catMates ? 'active' : null}`}>
                                            {/*Quiero agregarle la clase active solo si esto esta open*/}
                                            <svg onClick={closeCategoriasMates} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                           </svg>
                                            <ul>
                                                <li><Link onClick={handleCloseMenu} className='nav-categories-link' to="productos/mates">VER TODOS LOS MATES</Link><hr/></li>
                                                <li><Link onClick={handleCloseMenu} className='nav-categories-link' to="productos/mates-pampa">MATE PAMPA</Link><hr/></li>
                                                <li><Link onClick={handleCloseMenu} className='nav-categories-link' to="productos/mates-imperial">MATE IMPERIAL</Link><hr/></li>
                                                
                                            </ul>
                                           </nav>
                                        )
                                      }
                                      <hr/>    
                            </li>
                            <li onClick={handleCloseMenu}><Link className='nav-categories-link' to="/productos/combos">COMBOS</Link> <hr/></li>
                            <li><Link onClick={handleCloseMenu} className='nav-categories-link' to='productos/accesorios'>ACCESORIOS</Link> <hr/></li>
                            
                        </ul>
                    </nav>
                )
                
                }
                
            </li>
            
                {/*Aca ira el componente carrito*/}
                {<CardCarrito />}
              
        </ul>
    </nav>
  )
}

export default Navbar