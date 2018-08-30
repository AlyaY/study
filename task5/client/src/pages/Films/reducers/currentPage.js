import { handleActions } from 'redux-actions';

import { nextPage, prevPage } from '../actions';

const initialState = 1;

export default  handleActions({
  [nextPage]: (state, action) => (action.payload.currentPage),
  [prevPage]: (state, action) => (action.payload.currentPage),
}, initialState);
