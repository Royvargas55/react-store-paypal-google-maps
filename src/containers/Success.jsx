import React from 'react';
import useInitialState from '../hooks/useInitialState';
import Map from '../components/Map';

// Styles
import '../styles/components/Success.css';

const Success = () => {
  const {state: { buyer }} = useInitialState();
 
  return(
  <div className="Success">
    <div className="Success-content">
      <h2>{buyer[0].name}, Gracias por tu compra</h2>
      <span>Tu pedido llegará en 3 dias a tu direccion:</span>
      <div className="Success-map">
        <Map />
      </div>
    </div>
  </div>
)};

export default Success;
