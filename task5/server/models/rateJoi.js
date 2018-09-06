import Joi from 'joi';

const filmJoi = Joi.object().keys({
    rating: Joi.number().integer().min(0).max(5),
    user: Joi.string(),
    film: Joi.string(),
});

export default filmJoi;
