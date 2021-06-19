/* eslint-disable no-shadow */
import React from 'react';
import Product from './Product';
import useInitialState from '../hooks/useInitialState';

// Styles
import '../styles/components/Products.css';

const Products = () => {
  const { products, addToCart } = useInitialState();
  const isEmpty = Object.keys(products).length;
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      {isEmpty > 0 ? (
        <div className="Products">
          <div className="Products-items">
            {products.map((product) => (
              <Product
                key={product.id}
                Product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1>Cargando</h1>
      )}
    </>
  );
};

export default Products;
