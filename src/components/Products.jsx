/* eslint-disable no-shadow */
import React from 'react'
import Product from './Product';
import useInitialState from '../hooks/useInitialState';

// Styles
import '../styles/components/Products.css';

const Products = () => {
    const { state: { products }, addToCart } = useInitialState();
    
    const handleAddToCart = (product) => {
        addToCart(product)
    }

    return(
        <div className="Products">
            <div className="Products-items">
                {products.map(product => (
                    <Product key={product.id} 
                        Product={product} 
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    )
};

export default Products
