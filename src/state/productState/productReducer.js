import { actionTypes } from "./actionTypes";
export const initialState = {
  loading: false,
  error: false,
  products: [],
  cart: []
};
export const productReducer = (state = initialState, action) => {
  let selectedProduct = state.cart.find(product => product._id === action.payload._id);
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false
      }
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false
      }
    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state, action.payload]
      }
    case actionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload)
      }
    case actionTypes.ADD_TO_CART:
      if (selectedProduct) {
        console.log("selected quantity", selectedProduct.quantity);
        const newCart = state.cart.filter(product => product._id !== selectedProduct._id);
        selectedProduct.quantity = parseInt(selectedProduct.quantity);
        selectedProduct.quantity = parseInt(selectedProduct.quantity + 1);
        console.log("selected quantity", selectedProduct.quantity);
        console.log("selected Product", selectedProduct);
        return {
          ...state,
          cart: [...newCart, selectedProduct]
        }
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      }
    case actionTypes.REMOVE_FROM_CART:
      console.log("remove 4m cart", action.payload)
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(product => product._id !== selectedProduct._id);
        selectedProduct.quantity = selectedProduct.quantity - 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct]
        }
      }
      return {
        ...state,
        cart: state.cart.filter(product => product._id !== action.payload._id)
      }

    default:
      break;
  }
}