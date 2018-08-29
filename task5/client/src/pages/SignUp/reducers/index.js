import { combineReducers } from 'redux';

import error from './error';
import name from './name';
import surname from './surname';
import email from './email';
import password from './password';

export default combineReducers({
  error,
  name,
  surname,
  email,
  password,
});
