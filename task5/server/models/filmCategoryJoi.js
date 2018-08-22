import Joi from 'joi';

const filmCategoryJoi = Joi.object().keys({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).max(500).required(),
    films: Joi.array().items(Joi.string()).required(),
});

export default filmCategoryJoi;
