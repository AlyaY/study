import { createAction } from 'redux-actions';
import { LOGIN_SUCCESS, LOGIN_ERROR, UPDATE_INPUT } from './constants';

export const updateInput = createAction(
  UPDATE_INPUT,
  data => data
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  () => ({})
);

export const loginError = createAction(
  LOGIN_ERROR,
  data => data
);
