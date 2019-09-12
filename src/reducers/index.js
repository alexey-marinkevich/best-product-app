import { combineReducers } from 'redux';

import core from './coreReducer';
import form from './formReducer';

export default combineReducers({
  core,
  form,
});