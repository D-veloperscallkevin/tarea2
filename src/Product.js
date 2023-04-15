import React, { useState } from "react";
import './Product.css'

const Product = ({ titulo, descripcion, imagen}) => {
  const [cantidad, setCantidad] = useState(1);

  const hacerSuma = () => {
    setCantidad(cantidad + 1);
  };

  const hacerResta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="tarjeta">
      <img src={imagen}/>
      <h2 className="titulo">{titulo}</h2>
      <p className="descrip">{descripcion}</p>
      <div className="cantidad">
        <button className="design" onClick={hacerResta}>-</button>
        <span>{cantidad}</span>
        <button className="design" onClick={hacerSuma}>+</button>
      </div>
    </div>
  );
};

export default Product;

