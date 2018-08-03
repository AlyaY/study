import { handleActions } from 'redux-actions';

import { submitForm, updateEmail } from '../actions';

const initialState = '';

export default  handleActions({
  [submitForm]: (state, action) => (action.payload.email),
  [updateEmail]: (state, action) => (action.payload.email),
}, initialState);
