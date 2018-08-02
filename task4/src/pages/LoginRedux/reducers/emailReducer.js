import { handleActions } from 'redux-actions';
import { UPDATE_INPUT } from '../actions/constants';

const initialState = '';

const emailReducer = handleActions({
  [UPDATE_INPUT]: (state, action) => (action.payload.email || state),
}, initialState);

export default emailReducer;
