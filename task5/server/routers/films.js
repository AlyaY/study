const express = require('express');
const router = express.Router();

let films = [];

router.route('/')
    .get((req, res) => {
        res.send(films);
    })
    .post((req, res) => {
        films.push(req.body);

        res.json(req.body);
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