import Joi from 'joi';

import filmJoi from '../models/filmJoi';

const checkFilmData = (req, res, next) => {
    const { error } = Joi.validate(req.body, filmJoi);

    if(error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}

export default checkFilmData;