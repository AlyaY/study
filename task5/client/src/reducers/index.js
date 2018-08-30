import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from '../pages/Login/reducers';
import signUp from '../pages/SignUp/reducers';
import films from '../pages/Films/reducers';
import header from '../modules/Header/reducers';
import token from './token';

export default combineReducers({
  header,
  login,
  signUp,
  films,
  token,
  form: formReducer
});
