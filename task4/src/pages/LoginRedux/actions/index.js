import { LOGIN_SUCCESS, LOGIN_ERROR, UPDATE_INPUT } from './constants';

export const updateInput = ({ email, password }) => ({
  type: UPDATE_INPUT,
  payload: { email, password }
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
  payload: {}
});

export const loginError = errors => ({
  type: LOGIN_ERROR,
  payload: errors
});
