const Joi = require('joi');

const filmSchema = Joi.object().keys({
    id: Joi.number().integer().required(),
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).max(500).required(),
    avatar: Joi.string().uri({
        allowRelative: true
    }).required(),
    gallery: Joi.array().min(4).items(Joi.string().uri({
        allowRelative: true
    }).required(),).required(),
    rating: Joi.number().integer().min(0).max(5),
    category: Joi.number().integer()
});

module.exports = filmSchema;
