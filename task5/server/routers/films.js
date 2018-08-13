const express = require('express');
const Joi = require('joi');

const filmSchema = require('../models/filmSchema');
const films = require('../data/films');

const router = express.Router();

const validateFilm = (film) => {
    return Joi.validate(film, filmSchema).error;
}

router.route('/')
    .get((req, res) => {
        res.send(films);
    })
    .post((req, res) => {
        
        if(!validateFilm(req.body)) {
            films.push(req.body);
            res.json(req.body);
        } else {
            res.json({});
        }
    });

router.route('/:id')
    .put((req, res) => {
        const { id } = req.params;
        const film = films.find((film) => film.id === id);

        if(film) {
            res.send(film);
        } else {
            res.send({});
        }
    })
    .delete((req, res) => {
        const { id } = req.params;
        let successDeleted = false;

        films = films.reduce((allFilms, film) => {
            if(film.id === id) {
                successDeleted = true;
            } else {
                allFilms.push(film);
            }

            return allFilms;
        }, []);

        res.send({ success: successDeleted, id });
    });
  
module.exports = router;