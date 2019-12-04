import { API } from 'aws-amplify';

const initState = {
  products: [
    {
      "id": "bp-prod-12345",
      "prodName": "Atoms shoes",
      "headImg": "https: //cdn2.shopify.com/s/files/1/0231/2060/9358/files/Home_Packaging_1024x.jpg?v=1556841297",
      "shortDescription": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
      "fullDescription": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure esse tempore, mollitia cum illo cumque est molestias eligendi unde minima, impedit voluptate maiores  numquam neque",
      "siteUrl": "https: //atoms.com/",
      "gallery": [
        "https: //cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_BW_Closeup_1024x.jpg?v=1556563118",
        "https: //cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_Gray_Loft_600x.jpg?v=1557771826",
        "https: //cdn.shopify.com/s/files/1/0231/2060/9358/files/Home_White_Wide_1024x.jpg?v=1556563138"
      ]
    }
  ],
  activeProduct: null,
  isActiveProductLoading: false,
  isProductsLoadoing: false,
};

const SET_PRODUCTS = 'SET_PRODUCTS';
const TOGGLE_LOADING_PRODUCTS = 'TOGGLE_LOADING_PRODUCTS';
const SET_ACTIVE_PRODUCT_LOADING_STATUS = 'SET_ACTIVE_PRODUCT_LOADING_STATUS';
const SET_ACTIVE_PRODUCT = 'SET_ACTIVE_PRODUCT';

export const updateProducts = (products = []) => ({ type: SET_PRODUCTS, payload: products });
export const toggleLoadingProducts = status => ({ type: TOGGLE_LOADING_PRODUCTS, payload: status });
export const setActiveProductLoadingStatus = status => ({
  type: SET_ACTIVE_PRODUCT_LOADING_STATUS,
  payload: status,
});
export const setActiveProduct = product => ({ type: SET_ACTIVE_PRODUCT, payload: product });

export const loadProductById = id => async dispatch => {
  dispatch(setActiveProductLoadingStatus(true));
  try {
    // const res = await API.get('products', `/product/${id}`);
    // dispatch(setActiveProduct(res));
  } catch (e) {
    console.log(e);
  }

  dispatch(setActiveProductLoadingStatus(false));
};

export const setProducts = () => async dispatch => {
  dispatch(toggleLoadingProducts(true));
  // const res = await API.get('products', '/product');
  // dispatch(updateProducts(res));
  dispatch(toggleLoadingProducts(false));
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
        isProductsLoadoing: action.payload,
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
