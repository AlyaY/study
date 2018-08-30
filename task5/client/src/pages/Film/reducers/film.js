import { handleActions } from 'redux-actions';

import { setFilm } from '../actions';

const initialState = {};

export default  handleActions({
  [setFilm]: (state, action) => (action.payload.film),
}, initialState);
