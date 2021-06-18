import React from 'react';
import Products from '../components/Products';
import useInitialState from '../hooks/useInitialState';

const Home = () => {
  const {state: { products }} = useInitialState();
  return(
  <div>
    <Products Products={products} />
  </div>
)};

export default Home;
