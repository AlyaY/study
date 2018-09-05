import Joi from 'joi';

import rateJoi from '../models/rateJoi';

const checkRateData = (req, res, next) => {
    const { error } = Joi.validate(req.body, rateJoi);

    if(error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}

export default checkRateData;