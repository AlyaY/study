const Joi = require('joi');

const Film = require('../models/film');
const filmJoiSchema = require('../models/filmJoiSchema')

const get = (req, res) => {
    Film.find({}).limit(10)
        .then((films) => {
            res.json(films);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
}

const post = (req, res) => {
    Film.create(req.body)
        .then((film) => {
            res.json(film);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
}

const put = (req, res) => {
    const { id } = req.params;
    
    Film.findByIdAndUpdate(id, req.body)
        .then((film) => {
            res.send(film);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
}

const remove = (req, res) => {
    const { id } = req.params;

    Film.findByIdAndRemove(id)
        .then((film) => {
            res.send({ success: true, id, film });
        })
        .catch((error) => {
            res.status(400).send({ success: false, id });
        })
}

const checkData = (req, res, next) => {
    const { error } = Joi.validate(req.body, filmJoiSchema);

    if(error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}

module.exports = {
    get,
    post,
    put,
    remove,
    checkData
};
