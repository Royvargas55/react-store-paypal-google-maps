import React from 'react';

// Styles
import '../styles/components/Success.css';

const Success = () => (
  <div className="Success">
    <div className="Success-content">
      <h2>Roy, Gracias por tu compra</h2>
      <span>Tu pedido llegará en 3 dias a tu direccion:</span>
      <div className="Success-map">
        Google Maps
      </div>
    </div>
  </div>
);

export default Success;
