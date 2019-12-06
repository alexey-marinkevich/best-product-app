/* global window, module, process */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers.config';

const configureStore = (initialState) => {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(reducers, initialState, enhancer);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers.config', () => {
        store.replaceReducer(reducers);
      });
    }
  }

  return store;
};

export default configureStore;
