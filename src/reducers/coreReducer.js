import axios from 'axios';

const initState = {
  products: [],
  isProductsLoadoing: false,
};

const SET_PRODUCTS = 'SET_PRODUCTS';
const TOGGLE_LOADING_PRODUCTS = 'TOGGLE_LOADING_PRODUCTS';

export const updateProducts = (products=[]) => ({ type: SET_PRODUCTS, payload: products });
export const toggleLoadingProducts = status => ({ type: TOGGLE_LOADING_PRODUCTS, payload: status });
export const setProducts = () => async dispatch => {
  // enable loader
  dispatch(toggleLoadingProducts(true));

  // get products from "server"
  const products = await getProdsFromServer(1, 5);

  // set products to store
  dispatch(updateProducts(products));

  // disable loader
  dispatch(toggleLoadingProducts(false));
};

async function getProdsFromServer(page, perPage) {
  const response = await axios.get('http://localhost:3001/products', {
    params: {
      page: page,
      perPage: perPage,
    },
  });

  return response.data.data;
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case TOGGLE_LOADING_PRODUCTS:
      return {
        ...state,
        isProductsLoadoing: action.payload,
      };
    default:
      return state;
  }
};
