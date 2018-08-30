import { handleActions } from 'redux-actions';

import { submitForm } from '../actions';

const initialState = '';

export default handleActions({
  [submitForm]: (state, action) => (action.payload.password),
}, initialState);
