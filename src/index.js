import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';

import './index.css';

import App from './App';
import { amplifyConfig, createStore } from './config';

Amplify.configure(amplifyConfig);

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
