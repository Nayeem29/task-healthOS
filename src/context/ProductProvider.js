import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/productState/actionTypes';
import { initialState, productReducer } from '../state/productState/productReducer';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {

  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START })
    fetch('products.json')
      .then(res => res.json())
      .then(product => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: product }))
      .catch(() => dispatch({ type: actionTypes.FETCHING_ERROR }))
  }, []);

  const value = {
    state, dispatch
  }

  return (
    <div>
      <PRODUCT_CONTEXT.Provider value={value}>
        {children}
      </PRODUCT_CONTEXT.Provider>
    </div>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
}


export default ProductProvider;