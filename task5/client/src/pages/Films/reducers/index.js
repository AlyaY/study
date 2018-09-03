import { combineReducers } from 'redux';

import currentPage from './currentPage';
import films from './films';
import perPage from './perPage';
import search from './search';
import sort from './sort';

export default combineReducers({
  currentPage,
  films,
  perPage,
  search,
  sort,
});
