import { handleActions } from 'redux-actions';
import { updateEmail } from '../actions';

const initialState = '';

export default  handleActions({
  [updateEmail]: (state, action) => (action.payload.email),
}, initialState);
