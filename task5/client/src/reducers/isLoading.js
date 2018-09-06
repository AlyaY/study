import { handleActions } from 'redux-actions';

import { setLoadingState } from '../actions';

const initialState = false;

export default handleActions({
  [setLoadingState]: (state, action) => (action.payload.isLoading),
}, initialState);
