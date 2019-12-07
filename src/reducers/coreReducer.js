import { API } from 'aws-amplify';

const initState = {
  products: [],
  activeProduct: null,
  isActiveProductLoading: false,
  isProductsLoading: false,
};

const SET_PRODUCTS = 'SET_PRODUCTS';
const TOGGLE_LOADING_PRODUCTS = 'TOGGLE_LOADING_PRODUCTS';
const SET_ACTIVE_PRODUCT_LOADING_STATUS = 'SET_ACTIVE_PRODUCT_LOADING_STATUS';
const SET_ACTIVE_PRODUCT = 'SET_ACTIVE_PRODUCT';

export const updateProductsAction = (products = []) => ({ type: SET_PRODUCTS, payload: products });
export const toggleLoadingProductsAction = (status) => ({
  type: TOGGLE_LOADING_PRODUCTS,
  payload: status,
});
export const setActiveProductLoadingStatusAction = (status) => ({
  type: SET_ACTIVE_PRODUCT_LOADING_STATUS,
  payload: status,
});
export const setActiveProductAction = (product) => ({ type: SET_ACTIVE_PRODUCT, payload: product });

export const loadProductByIdAction = (id) => async (dispatch, getState) => {
  dispatch(setActiveProductLoadingStatusAction(true));
  try {
    const { products } = getState().core;
    let activeProductLoaded = products.find((product) => product.id === id);

    if (!activeProductLoaded) {
      activeProductLoaded = await API.get('products', `/product/${id}`, null);
    }

    dispatch(setActiveProductAction(activeProductLoaded));
  } catch (e) {
    // TODO: Handle errors
  }

  dispatch(setActiveProductLoadingStatusAction(false));
};

export const setProductsAction = () => async (dispatch) => {
  dispatch(toggleLoadingProductsAction(true));
  const res = await API.get('products', '/product', null);
  dispatch(updateProductsAction(res));
  dispatch(toggleLoadingProductsAction(false));
};

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
        isProductsLoading: action.payload,
      };
    case SET_ACTIVE_PRODUCT_LOADING_STATUS:
      return {
        ...state,
        isActiveProductLoading: action.payload,
      };
    case SET_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProduct: action.payload,
      };
    default:
      return state;
  }
};
