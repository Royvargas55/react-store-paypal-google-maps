/* eslint-disable no-console */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import useInitialState from '../hooks/useInitialState';

// Styles
import '../styles/components/Payment.css';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder
  } = useInitialState();

  const history = useHistory();

  const paypalOptions = {
    clientId: 'AR5ic9yirb5hZ06ysRqcb2dXtQATd6FMA_GTlVLNdbMA3A2auKReg8Cu_cb6edmqa217KWSx7Rhxc-JK',
    intent: 'capture',
    currency: 'USD'
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  };

  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      };
      addNewOrder(newOrder);
      history.push('/checkout/success')
    };
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions} 
            buttonStyles={buttonStyles} 
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
