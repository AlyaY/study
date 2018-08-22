import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from '../pages/Login/reducers';
import films from '../pages/Films/reducers';

export default combineReducers({
  login,
  films,
  form: formReducer
});
