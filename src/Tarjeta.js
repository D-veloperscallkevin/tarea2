import React, { useState } from 'react';
import './Tarjeta.css';

function Tarjeta(props) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const verDescripcion = () => {
    setMostrarDescripcion(!mostrarDescripcion);
  };

  return (

    <div className="info">
      <h2 className="info-titulo">{props.titulo}</h2>
      <p className={`info-descripcion ${mostrarDescripcion ? 'mostrar' : ''}`}>
        {props.descripcion}
      </p>
      <button className="info-boton" onClick={verDescripcion}>
        {mostrarDescripcion ? 'Ocultar' : 'Ver'}
      </button>
    </div>
  );
}

export default Tarjeta;
