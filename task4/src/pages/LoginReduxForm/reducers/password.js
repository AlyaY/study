import { handleActions } from 'redux-actions';

import { submitForm, updatePassword } from '../actions';

const initialState = '';

export default handleActions({
  [submitForm]: (state, action) => (action.payload.password),
  [updatePassword]: (state, action) => (action.payload.password),
}, initialState);
