import React, { useState } from "react";
import './Product.css'

const Product = ({ titulo, descripcion }) => {
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
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <div className="cantidad">
        <button onClick={hacerResta}>-</button>
        <span>{cantidad}</span>
        <button onClick={hacerSuma}>+</button>
      </div>
    </div>
  );
};

export default Product;

