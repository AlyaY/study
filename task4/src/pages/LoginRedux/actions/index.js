import { createAction } from 'redux-actions';

export const updateEmail = createAction('UPDATE_EMAIL');
export const updatePassword = createAction('UPDATE_PASSWORD');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginError = createAction('LOGIN_ERROR');
