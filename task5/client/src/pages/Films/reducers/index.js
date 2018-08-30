import { combineReducers } from 'redux';

import currentPage from './currentPage';
import films from './films';
import perPage from './perPage';

export default combineReducers({
  currentPage,
  films,
  perPage,
});
