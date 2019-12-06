import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import createReduxStore from './reducers/createReduxStore';
import Amplify from 'aws-amplify';
import amplifyConfig from './config/amplify.config';

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: amplifyConfig.common.REGION,
    identityPoolId: amplifyConfig.cognito.IDENTITY_POOL_ID,
  },
  API: {
    endpoints: [
      {
        name: 'products',
        endpoint: amplifyConfig.apiGateway.BASE_PRODUCT_URL,
        region: amplifyConfig.common.REGION,
      },
    ],
  },
});

const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
