import React from 'react'
import '../Hojas_css/textoConRayas.css';

const TextoConRayas = ({ texto }) => {
    return (
        //Luego para usarlo en un componente y elegir lo que tiene que decir : <TextoConRayas texto = "Seguinos" />
      <div className="texto-con-rayas">
        <span className="raya"></span>
        <span className="contenido">{texto}</span>
        <span className="raya"></span>
      </div>
    );
  };

export default TextoConRayas