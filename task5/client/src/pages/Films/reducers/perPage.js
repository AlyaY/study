import { handleActions } from 'redux-actions';

import { setFilmsPerPage } from '../actions';

const initialState = 3;

export default  handleActions({
  [setFilmsPerPage]: (state, action) => (action.payload.perPage),
}, initialState);
