import React from 'react';
import { Link } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';

// Styles
import '../styles/components/Header.css';

const Header = () => {
  const { state: { cart } } = useInitialState();

  return(
    <div className="Header">
      <h1 className="Header-tittle">
        <Link to="/">React Roy Store</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout"><i className="fas fa-shopping-basket" /></Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  )
};

export default Header;
