import Joi from 'joi';

const filmJoi = Joi.object().keys({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).max(1500).required(),
    year: Joi.number().min(1900).required(),
    avatar: Joi.string().uri({
        allowRelative: true
    }).required(),
    gallery: Joi.array().min(2).items(Joi.string().uri({
        allowRelative: true
    }).required(),).required(),
    rating: Joi.array().items(Joi.number().integer().min(0).max(5)),
    comment: Joi.array().items(Joi.string()),
    category: Joi.string()
});

export default filmJoi;
