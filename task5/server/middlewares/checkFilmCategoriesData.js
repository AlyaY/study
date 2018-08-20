const Joi = require('joi');

const filmCategoryJoi = require('../models/filmCategoryJoi');

const checkFilmCategoriesData = (req, res, next) => {
    const { error } = Joi.validate(req.body, filmCategoryJoi);

    if(error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}

module.exports = checkFilmCategoriesData;