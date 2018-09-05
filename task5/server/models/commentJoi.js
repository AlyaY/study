import Joi from 'joi';

const commentJoi = Joi.object().keys({
    text: Joi.array().items(Joi.string().min(3).max(200)),
    date: Joi.date().required(),
    user: Joi.string().required()
});

export default commentJoi;
