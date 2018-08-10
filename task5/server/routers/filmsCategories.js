const express = require('express');
const router = express.Router();

let categories = [];

router.route('/')
    .get((req, res) => {
        res.send(categories);
    })
    .post((req, res) => {
        categories.push(req.body);

        res.json(req.body);
    });

router.route('/:id')
    .put((req, res) => {
        const { id } = req.params;
        const film = categories.find((film) => film.id === id);

        if(film) {
            res.send(film);
        } else {
            res.send({});
        }
    })
    .delete((req, res) => {
        const { id } = req.params;
        let successDeleted = false;

        categories = categories.reduce((allcategories, film) => {
            if(film.id === id) {
                successDeleted = true;
            } else {
                allcategories.push(film);
            }

            return allcategories;
        }, []);

        res.send({ success: successDeleted, id });
    });
  
module.exports = router;