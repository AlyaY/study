import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from '../pages/LoginRedux/reducers';
import loginForm from '../pages/LoginReduxForm/reducers';

export default combineReducers({
  login,
  loginForm,
  form: formReducer
});
