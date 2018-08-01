import { LOGIN_SUCCESS, LOGIN_ERROR, UPDATE_EMAIL, UPDATE_PASSWORD } from './constants'

export const updateEmail = email => ({
  type: UPDATE_EMAIL,
  payload: { email: email }
})

export const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  payload: { password }
})

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
  payload: {}
})

export const loginError = errors => ({
  type: LOGIN_ERROR,
  payload: errors
})
