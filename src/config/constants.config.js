/* global process */

const constants = {
  common: {
    REGION: process.env.REACT_APP_REGION,
  },
  apiGateway: {
    products: {
      ENDPOINT: process.env.REACT_APP_API_GATEWAY_PRODUCTS_URL,
      NAME: 'products',
    }
  },
  cognito: {
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  }
};

export default constants;
