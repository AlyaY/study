import { handleActions } from 'redux-actions';
import { updatePassword } from '../actions';

const initialState = '';

export default handleActions({
  [updatePassword]: (state, action) => (action.payload.password),
}, initialState);
