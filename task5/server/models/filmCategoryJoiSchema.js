const Joi = require('joi');

const filmCategoryJoiSchema = Joi.object().keys({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).max(500).required(),
    films: Joi.array().items(Joi.string()).required(),
});

module.exports = filmCategoryJoiSchema;