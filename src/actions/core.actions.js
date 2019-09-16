import axios from 'axios';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const TOGGLE_LOADING_PRODUCTS = 'TOGGLE_LOADING_PRODUCTS';

export const updateProducts = (products = []) => ({ type: SET_PRODUCTS, payload: products });
export const toggleLoadingProducts = status => ({ type: TOGGLE_LOADING_PRODUCTS, payload: status });
export const setProducts = () => async dispatch => {
  // enable loader
  dispatch(toggleLoadingProducts(true));

  // get products from "server"
  const products = await getProdsFromServer();

  // set products to store
  dispatch(updateProducts(products));

  // disable loader
  dispatch(toggleLoadingProducts(false));
};

async function getProdsFromServer() {
  const response = await axios.get('http://localhost:3001/products', {
    params: {
      page: 1,
      perPage: 5,
    },
  });
  
  return response.data.data;
}
