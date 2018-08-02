import { UPDATE_INPUT } from '../actions/constants';

const initialState = '';

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.payload.email || state;
    default:
      return state;
  }
}

export default emailReducer;
