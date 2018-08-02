import { handleActions } from 'redux-actions';
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/constants';

const initialState = '';

const passwordErrorReducer = handleActions({
  [LOGIN_SUCCESS]: () => (initialState),
  [LOGIN_ERROR]: (state, action) => (action.payload.errorPassword),
}, initialState);

export default passwordErrorReducer;
