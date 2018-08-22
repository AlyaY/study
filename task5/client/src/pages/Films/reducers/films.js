import { handleActions } from 'redux-actions';

import { getFilms } from '../actions';

const initialState = [];

export default  handleActions({
  [getFilms]: (state, action) => (action.payload.films),
}, initialState);
