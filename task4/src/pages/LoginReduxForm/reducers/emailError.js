import { handleActions } from 'redux-actions';
import { loginSuccess, loginError } from '../actions';

const initialState = '';

export default handleActions({
  [loginSuccess]: () => (initialState),
  [loginError]: (state, action) => (action.payload.errorEmail)
}, initialState);
