import { handleActions } from 'redux-actions';

import { setFilmsPerPage } from '../actions';

const initialState = 2;

export default  handleActions({
  [setFilmsPerPage]: (state, action) => (action.payload.perPage),
}, initialState);
