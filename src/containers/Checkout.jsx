/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';

// Styles
import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useInitialState();

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <Helmet>
        <title>Roy Store - Lista de pedidos</title>
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
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <h3>Lista de pedidos:</h3>
          ) : (
            <h3>Sin pedidos...</h3>
          )}
          {cart.map((item) => (
            <div className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={() => handleRemove(item)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio total $ ${handleSumTotal()}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
