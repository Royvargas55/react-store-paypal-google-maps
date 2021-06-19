import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import useInitialState from '../hooks/useInitialState';

const Home = () => {
  const {
    state: { products },
  } = useInitialState();
  return (
    <div>
      <Helmet>
        <title>Roy Store - Productos</title>
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
      <Products Products={products} />
    </div>
  );
};

export default Home;
