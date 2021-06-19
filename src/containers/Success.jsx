import React from 'react';
import { Helmet } from 'react-helmet';
import useInitialState from '../hooks/useInitialState';
import Map from '../components/Map';

// Styles
import '../styles/components/Success.css';

const Success = () => {
  const {
    state: { buyer },
  } = useInitialState();

  return (
    <>
      <Helmet>
        <title>Roy Store - Pedido exitoso</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@royvargas55" />
        <meta name="twitter:creator" content="@royvargas55" />
        <meta name="twitter:title" content="React Roy Store" />
        <meta name="twitter:description" content="React Roy Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="React Roy Store" />
        <meta property="og:description" content="React Roy Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="roy-platzi-store-cabb6.web.app" />
        <meta property="og:site_name" content="React Roy Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="Success">
        <div className="Success-content">
          <h2>{buyer[0].name}, Gracias por tu compra</h2>
          <span>Tu pedido llegará en 3 dias a tu direccion:</span>
          <div className="Success-map">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
