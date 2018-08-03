import { combineReducers } from 'redux';

import emailError from './emailError';
import email from './email';
import passwordError from './passwordError';
import password from './password';

export default combineReducers({
  emailError,
  email,
  passwordError,
  password,
});
