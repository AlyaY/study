const Joi = require('joi');

const categorySchema = Joi.object().keys({
    id: Joi.number().integer().required(),
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).max(500).required(),
    films: Joi.array().items(Joi.number().integer()).required(),
});

module.exports = categorySchema;
