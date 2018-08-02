import { UPDATE_INPUT } from '../actions/constants';

const initialState = '';

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.payload.password || state;
    default:
      return state;
  }
}

export default passwordReducer;
