import { handleActions } from 'redux-actions';
import { UPDATE_INPUT } from '../actions/constants';

const initialState = '';

const passwordReducer = handleActions({
  [UPDATE_INPUT]: (state, action) => (action.payload.password || state),
}, initialState);

export default passwordReducer;
