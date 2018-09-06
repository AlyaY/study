import { handleActions } from 'redux-actions';

import { setSortType } from '../actions';

const initialState = '';

export default  handleActions({
  [setSortType]: (state, action) => (action.payload.sort),
}, initialState);
