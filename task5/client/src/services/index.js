import axios from 'axios';

const api = 'https://films--library.herokuapp.com/api/';

const API = {
    LOGIN: api + 'auth/login/',
    SIGNUP: api + 'auth/',
    FILMS: api + 'films/',
    FILM: api + 'film/',
}

export const login = (user) => (axios.post(API.LOGIN, { user }));
export const signup = (user) => (axios.post(API.SIGNUP, { user }));
export const getFilms = (page, perPage = 0) => {
    const filmsPerPage = perPage > 0 ? `?perpage=${perPage}` : '';

    return axios.get(`${API.FILMS}${page}${filmsPerPage}`);
};
export const getFilm = (id) => axios.get(`${API.FILM}${id}`);
