import {combineReducers} from 'redux';

import core from '../reducers/coreReducer';
import form from '../reducers/formReducer';

export default combineReducers({
  core,
  form,
});
