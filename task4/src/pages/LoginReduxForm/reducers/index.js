import { combineReducers } from 'redux';

import email from './email';
import password from './password';

export default combineReducers({
  email,
  password,
});
