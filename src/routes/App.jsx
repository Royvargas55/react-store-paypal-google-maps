import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppState } from '../context/AppState';
import initialState from '../initialState';

// Components
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';

const App = () => {
  const isEmpty = Object.keys(initialState).length;
  return (
    <>
      {isEmpty > 0 ? (
        <AppState>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
                <Route
                  exact
                  path="/checkout/information"
                  component={Information}
                />
                <Route exact path="/checkout/payment" component={Payment} />
                <Route exact path="/checkout/success" component={Success} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </AppState>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default App;
