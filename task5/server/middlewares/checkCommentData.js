import Joi from 'joi';

import commentJoi from '../models/commentJoi';

const checkCommentData = (req, res, next) => {
    const { error } = Joi.validate(req.body, commentJoi);

    if(error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}

export default checkCommentData;