import { combineReducers } from 'redux';

import name from './name';
import surname from './surname';
import email from './email';
import password from './password';

export default combineReducers({
  name,
  surname,
  email,
  password,
});
