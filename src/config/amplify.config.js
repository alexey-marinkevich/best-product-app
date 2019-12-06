export default {
  common: {
    REGION: process.env.REACT_APP_REGION,
  },
  apiGateway: {
    BASE_PRODUCT_URL: process.env.REACT_APP_BASE_PRODUCT_URL,
  },
  cognito: {
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  }
};