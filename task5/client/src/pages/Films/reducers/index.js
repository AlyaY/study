import { combineReducers } from 'redux';

import currentPage from './currentPage';
import films from './films';
import perPage from './perPage';
import search from './search';
import sort from './sort';
import categories from './categories';
import category from './category';

export default combineReducers({
  currentPage,
  films,
  perPage,
  search,
  sort,
  categories,
  category,
});
