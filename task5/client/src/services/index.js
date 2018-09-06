import axios from 'axios';

const api = 'https://films--library.herokuapp.com/api/';

const API = {
    LOGIN: api + 'auth/login/',
    SIGNUP: api + 'auth/',
    FILMS: api + 'films/',
    FILM: api + 'film/',
    RATE: api + 'rate/',
    CATEGORIES: api + 'films/categories/',
}

export const login = (user) => axios.post(API.LOGIN, { user });
export const signup = (user) => axios.post(API.SIGNUP, { user });
export const getFilms = (sort = '', page = 1, perPage = 0) => {
    const filmsPerPage = perPage > 0 ? `?perpage=${perPage}` : '';
    const filmsSort = filmsPerPage ? `&sort=${sort}` : `?sort=${sort}`;

    return axios.get(`${API.FILMS}${page}${filmsPerPage}${filmsSort}`);
};
export const getFilm = (id) => axios.get(`${API.FILM}${id}`);
export const findFilms = (search) => axios.post(API.FILM,  { search });

export const getCategories = () => axios.get(API.CATEGORIES);
export const getFilmsByCategories = (id) => axios.get(`${API.CATEGORIES}${id}`);

export const setRating = (token, body) => axios.post(
    API.RATE, 
    { ...body }, 
    { headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}` 
    }
});