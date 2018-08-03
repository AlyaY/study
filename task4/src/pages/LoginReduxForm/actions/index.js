import { createAction } from 'redux-actions';

export const submitForm = createAction('SUBMIT_FORM');
export const updateEmail = createAction('FORM:UPDATE_EMAIL');
export const updatePassword = createAction('FORM:UPDATE_PASSWORD');
