import { combineReducers } from 'redux';

import error from './error';
import email from './email';
import password from './password';

export default combineReducers({
  error,
  email,
  password,
});
