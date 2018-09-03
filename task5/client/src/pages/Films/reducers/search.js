import { handleActions } from 'redux-actions';

import { setSearchString } from '../actions';

const initialState = '';

export default  handleActions({
  [setSearchString]: (state, action) => (action.payload.search),
}, initialState);
