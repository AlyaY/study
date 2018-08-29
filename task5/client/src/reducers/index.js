import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from '../pages/Login/reducers';
import signUp from '../pages/SignUp/reducers';
import films from '../pages/Films/reducers';
import header from '../modules/Header/reducers';

export default combineReducers({
  header,
  login,
  signUp,
  films,
  form: formReducer
});
