import { handleActions } from 'redux-actions';

import { setFilms, addFilms } from '../actions';

const initialState = [];

export default  handleActions({
  [setFilms]: (state, action) => (action.payload.films),
  [addFilms]: (state, action) =>  ([...state, ...action.payload.films]),
}, initialState);
