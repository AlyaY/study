import Joi from 'joi';

const userJoi = Joi.object().keys({
    name: Joi.string().min(4).required(),
    surname: Joi.string().min(4).required(),
    email: Joi.string().required(),
    // avatar: Joi.string().uri({
    //     allowRelative: true
    // }).required(),
    films: Joi.array().items(Joi.string()),
    comments: Joi.array().items(Joi.string()),
});

export default userJoi;
