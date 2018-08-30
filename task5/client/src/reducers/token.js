import { handleActions } from 'redux-actions';

import { setToken, removeToken } from '../actions';

const initialState = '';

export default handleActions({
  [setToken]: (state, action) => (action.payload.token),
  [removeToken]: (state, action) => (initialState),
}, initialState);
