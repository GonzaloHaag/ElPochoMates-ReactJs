import React from 'react'
import '../Hojas_css/logoCargando.css';
import { FaSpinner } from 'react-icons/fa'; 
const LogoCargando = () => {
  return (
    <div className='logo-cargando-container'>
     <FaSpinner className='logo-cargando' color='blue' />
    </div>
  )
}

export default LogoCargando