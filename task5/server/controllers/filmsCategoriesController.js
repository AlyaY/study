
const Joi = require('joi');

const Category = require('../models/filmCategory');
const filmCategoryJoiSchema = require('../models/filmCategoryJoiSchema');

const get = (req, res) => {
    Category.find({})
        .then((categories) => {
            res.json(categories);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
}

const post = (req, res) => {
    Category.create(req.body)
        .then((category) => {
            res.json(category);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
}

const put = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndUpdate(id, req.body)
        .then((category) => {
            res.send(category);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
}

const remove = (req, res) => {
    const { id } = req.params;
    
    Category.findByIdAndRemove( id)
        .then((category) => {
            res.send({ success: true, id, category });
        })
        .catch((error) => {
            res.status(400).send({ success: false, id });
        })
}

const checkData = (req, res, next) => {
    const { error } = Joi.validate(req.body, filmCategoryJoiSchema);

    if(error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
}

module.exports = {
    get,
    post,
    put,
    remove,
    checkData
};
