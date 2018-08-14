const Joi = require('joi');

let films = require('../data/films');
const filmSchema = require('../models/filmSchema');

const validateFilm = (film) => {
    return Joi.validate(film, filmSchema).error;
}

const get = (req, res) => {
    res.send(films);
}

const post = (req, res) => {
    const error = validateFilm(req.body);

    if(error) {
        res.status(400).json(error.details[0].message);
    } else {
        films.push(req.body);
        res.json(req.body);
    }
}

const put = (req, res) => {
    const { id } = req.params;
    const film = films.find((film) => film.id === id);

    if(film) {
        res.send(film);
    } else {
        res.status(400).send({ error: 'There is no such film'})
    }
}

const remove = (req, res) => {
    const { id } = req.params;
    let successDeleted = false;

    films = films.reduce((allfFilms, film) => {
        if(film.id === id) {
            successDeleted = true;
        } else {
            allfilms.push(film);
        }

        return allfFilms;
    }, []);

    if(successDeleted) {
        res.send({ success: successDeleted, id });
    } else {
        res.status(400).send({ success: successDeleted, id });
    }
}

module.exports = {
    get,
    post,
    put,
    remove
};
