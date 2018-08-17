const Joi = require('joi');

const Film = require('../models/film');
const filmJoi = require('../models/filmJoi');

const filmsPerPage = 2;

const get = async (req, res) => {
    const page = Number.parseInt(req.params.page) || 1;
    const perPage = Number.parseInt(req.query.perpage) || filmsPerPage;
    
    const films = await Film
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage);
    res.json(films);
}

const post = async(req, res) => {
    const film = await Film.create(req.body);
    res.json(film);
}

const put = async (req, res) => {
    const { id } = req.params;

    const film = await Film.findByIdAndUpdate(id, req.body);
    res.json(film);
}

const remove = async (req, res) => {
    const { id } = req.params;

    const film = await Film.findByIdAndRemove(id);
    res.send({ success: true, film });
}

const checkData = (req, res, next) => {
    const { error } = Joi.validate(req.body, filmJoi);

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
