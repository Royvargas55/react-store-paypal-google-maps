/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';

// Styles
import '../styles/components/Information.css';

const Information = () => {
  const history = useHistory();

  const {
    state: { cart },
    addToBuyer,
  } = useInitialState();

  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <>
      <Helmet>
        <title>Roy Store - Información de la orden</title>
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
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Información de contacto:</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre completo" name="name" />
              <input
                type="text"
                placeholder="Correo Electronico"
                name="email"
              />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="Apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="País" name="country" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Código postal" name="cp" />
              <input type="text" placeholder="Teléfono" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          {cart.map((item) => (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
