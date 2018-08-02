import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/constants';

const initialState = '';

const emailErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return initialState;
    case LOGIN_ERROR:
      return action.payload.errorEmail;
    default:
      return state;
  }
}

export default emailErrorReducer;
