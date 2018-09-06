import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from '../pages/Login/reducers';
import signUp from '../pages/SignUp/reducers';
import films from '../pages/Films/reducers';
import film from '../pages/Film/reducers';
import header from '../modules/Header/reducers';
import isLoading from './isLoading';
import token from './token';
import userId from './userId';

export default combineReducers({
  header,
  login,
  signUp,
  films,
  film,
  isLoading,
  token,
  userId,
  form: formReducer
});
