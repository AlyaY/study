import { handleActions } from 'redux-actions';

import { setCategory } from '../actions';

const initialState = '';

export default  handleActions({
  [setCategory]: (state, action) => (action.payload.category),
}, initialState);
