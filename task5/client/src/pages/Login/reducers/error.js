import { handleActions } from 'redux-actions';

import { updateError } from '../actions';

const initialState = '';

export default  handleActions({
  [updateError]: (state, action) => (action.payload),
}, initialState);
