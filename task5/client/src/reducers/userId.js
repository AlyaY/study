import { handleActions } from 'redux-actions';

import { setUserId, removeUserId } from '../actions';

const initialState = '';

export default handleActions({
  [setUserId]: (state, action) => (action.payload.userId),
  [removeUserId]: (state, action) => (initialState),
}, initialState);
