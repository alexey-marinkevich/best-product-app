import { SET_PRODUCTS, TOGGLE_LOADING_PRODUCTS } from '../actions/core.actions';

const initState = {
  products: [],
  isProductsLoadoing: false,
};

export default (state = initState, action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case TOGGLE_LOADING_PRODUCTS:
      return {
        ...state,
        isProductsLoadoing: action.payload,
      }
    default:
      return state;
  }
};
