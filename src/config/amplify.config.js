import constants from './constants.config';

const amplifyConfig = {
  Auth: {
    region: constants.common.REGION,
    identityPoolId: constants.cognito.IDENTITY_POOL_ID,
  },
  API: {
    endpoints: [
      {
        name: constants.apiGateway.products.NAME,
        endpoint: constants.apiGateway.products.ENDPOINT,
        region: constants.common.REGION,
      },
    ],
  },
};

export default amplifyConfig;
