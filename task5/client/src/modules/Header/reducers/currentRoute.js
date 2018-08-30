import { handleActions } from 'redux-actions';

import { setCurrentRoute } from '../actions';
import { routers } from '../constants'

const initialState = routers[0].path;

export default  handleActions({
  [setCurrentRoute]: (state, action) => (action.payload.currentRoute),
}, initialState);
