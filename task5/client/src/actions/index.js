import { createAction } from 'redux-actions';

export const setToken = createAction('SET_TOKEN');
export const removeToken = createAction('REMOVE_TOKEN');
export const setLoadingState = createAction('SET_LOADING_STATE');
export const setUserId = createAction('SET_USER_ID');
export const removeUserId = createAction('REMOVE_USER_ID');
