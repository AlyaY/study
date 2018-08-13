const Joi = require('joi');

const categories = require('../data/categories');
const categorySchema = require('../models/categorySchema');

const validateCategory = (category) => {
    return Joi.validate(category, categorySchema).error;
}

const get = (req, res) => {
    res.send(categories);
}

const post = (req, res) => {
    const error = validateFilm(req.body);
    
    if(error) {
        res.json(error.details[0].message);
    } else {
        films.push(req.body);
        res.json(req.body);
    }
}

const put = (req, res) => {
    const { id } = req.params;
    const film = categories.find((film) => film.id === id);

    if(film) {
        res.send(film);
    } else {
        res.send({});
    }
}

const remove = (req, res) => {
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
}

module.exports.get = get;
module.exports.post = post;
module.exports.put = put;
module.exports.remove = remove;
