const DEV_ENDPOINT = 'http://localhost:4000';

function withMocker(target, mock) {
  const isDev = process.env.REACT_APP_DEV;

  return isDev ? mock : target;
}

const constants = {
  common: {
    REGION: withMocker(process.env.REACT_APP_REGION),
  },
  apiGateway: {
    products: {
      ENDPOINT: withMocker(process.env.REACT_APP_API_GATEWAY_PRODUCTS_URL, DEV_ENDPOINT),
      NAME: 'products',
    },
  },
  cognito: {
    IDENTITY_POOL_ID: withMocker(process.env.REACT_APP_IDENTITY_POOL_ID),
  },
};

export default constants;
