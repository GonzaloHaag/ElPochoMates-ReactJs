import React from 'react'

const FooterSlider = ({icono,texto,span}) => {
  return (
    <div className='footer-slider'>
        <div className='icon-text'>
            {/*Estos valores se los paso cuando lo llamo, asi no repito la misma estructura 3 veces*/}
            <span className='footer-slider-icono'>{icono}</span>
            <div className='title-text-container'>
            <p className='footer-slider-title'>{texto}</p>
            <span className='footer-slider-text'>{span}</span>
            </div>
        </div>
        
    </div>
  )
}

export default FooterSlider