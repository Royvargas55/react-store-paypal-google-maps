/* eslint-disable no-shadow */
import React from 'react'

// Styles
import '../styles/components/Products.css';

const Product = ({Product, handleAddToCart}) => (
        <div className="Products-item">
            <img src={`https://strapi-backend-react-store.herokuapp.com${Product.image[0].url}`} alt={Product.title} />
            <div className="Products-item-info">
                <h2>{Product.title}
                    <span>${Product.price}</span>
                </h2>
                <p>{Product.description}</p>
            </div>
            <button type="button" onClick={() => {handleAddToCart(Product)}}>Comprar</button>
        </div>
    );

export default Product
