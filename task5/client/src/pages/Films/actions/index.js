import { createAction } from 'redux-actions';

export const setFilms = createAction('SET_FILMS');
export const updateFilmInFilms = createAction('UPDATE_FILM_IN_FILMS');
export const addFilms = createAction('ADD_FILMS');
export const nextPage = createAction('NEXT_FILMS_PAGE');
export const prevPage = createAction('PREV_FILMS_PAGE');
export const setFilmsPerPage = createAction('SET_FILMS_PER_PAGE');
export const setSearchString = createAction('SET_SEARCH_STRING');
export const setSortType = createAction('SET_SORT_TYPE');
