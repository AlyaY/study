import { handleActions } from 'redux-actions';

import { setFilms, addFilms, updateFilmInFilms } from '../actions';

const initialState = [];

export default  handleActions({
  [setFilms]: (state, action) => (action.payload.films),
  [addFilms]: (state, action) =>  ([...state, ...action.payload.films]),
  [updateFilmInFilms]: (state, action) =>  {
    const { film } = action.payload;
    const oldFilms = state.filter(({ _id }) => (_id !== film._id));
    
    return ([...oldFilms, film])
  },
}, initialState);
