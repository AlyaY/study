import Joi from 'joi';

import filmCategoryJoi from '../models/filmCategoryJoi';

const checkFilmCategoriesData = (req, res, next) => {
    const { error } = Joi.validate(req.body, filmCategoryJoi);

    if(error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}

export default checkFilmCategoriesData;