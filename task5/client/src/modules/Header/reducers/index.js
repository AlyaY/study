import { combineReducers } from 'redux';

import routers from './routers';
import currentRoute from './currentRoute';

export default combineReducers({
  routers,
  currentRoute,
});
