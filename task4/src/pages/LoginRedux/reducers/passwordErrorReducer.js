import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/constants'

const initialState = ''

const passwordErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return initialState
    case LOGIN_ERROR:
      return action.payload.errorPassword
    default:
      return initialState
  }
}

export default passwordErrorReducer
