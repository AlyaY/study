import Joi from 'joi';

const userJoi = Joi.object().keys({
    name: Joi.string().min(4).required(),
    surname: Joi.string().min(4).required(),
    email: Joi.string().required(),
    filmRate: Joi.array().items(Joi.string()),
    comment: Joi.array().items(Joi.string()),
});

export default userJoi;
