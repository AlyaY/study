const Joi = require('joi');

const films = require('../data/films');
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
        res.json(error.details[0].message);
    } else {
        films.push(req.body);
        res.json(req.body);
    }
}

const put = (req, res) => {
    const { id } = req.params;
    const category = categories.find((category) => category.id === id);

    if(category) {
        res.send(category);
    } else {
        res.send({});
    }
}

const remove = (req, res) => {
    const { id } = req.params;
    let successDeleted = false;

    categories = categories.reduce((allcategories, category) => {
        if(category.id === id) {
            successDeleted = true;
        } else {
            allcategories.push(category);
        }

        return allcategories;
    }, []);

    res.send({ success: successDeleted, id });
}

module.exports.get = get;
module.exports.post = post;
module.exports.put = put;
module.exports.remove = remove;
