import React from 'react';
import { useProducts } from '../context/ProductProvider';
import { actionTypes } from '../state/productState/actionTypes';

const ProductCartView = ({ products }) => {
  console.log('product:', products);
  const { dispatch } = useProducts();
  return (
    <div className='flex justify-center items-center bg-base-100 shadow-xl'>
      <figure><img className='w-1/2 mx-auto' src={products.image} alt="Shoes" /></figure>
      <div className="card-body ">
        <h2 className="text-xs md:text-2xl text-indigo-900 text-bold">{products.model}</h2>
        <p className='text-semibold text-xs md:text-2xl text-indigo-900'>Quantity: {products.quantity ? products.quantity : 1} </p>
        <div className="card-actions flex justify-center w-full md:w-1/2">
          <button onClick={() =>
            dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: products })
          }
            className="btn btn-error text-semibold text-white text-xs">Remove</button>
          <p className='text-semibold text-xs md:text-2xl bg-indigo-500 md:w-1/3 text-center md:mx-3 rounded py-2 text-white'>{products.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCartView;