import { handleActions } from 'redux-actions';

import { setFilms } from '../actions';

const initialState = [];

export default  handleActions({
  [setFilms]: (state, action) => (action.payload.films),
}, initialState);
