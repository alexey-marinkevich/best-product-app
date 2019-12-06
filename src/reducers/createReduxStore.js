import { createStore, applyMiddleware } from 'redux';
import combineReducers from './index';
import thunk from 'redux-thunk';

const initialState = {};

const createReduxStore = () => {
  return createStore(
    combineReducers,
    initialState,
    applyMiddleware(thunk),
  );
};

export default createReduxStore;
