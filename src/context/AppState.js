/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import AppContext from './AppContext';
import initialState from '../initialState';

export const AppState = ({children}) => {
    
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    };

    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        });
    };

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        });
    };

    return <AppContext.Provider value={{
        state, 
        addToCart, 
        removeFromCart,
        addToBuyer,
        addNewOrder
    }}> 
        {children}
    </AppContext.Provider>
};
