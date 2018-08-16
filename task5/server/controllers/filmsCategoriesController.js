
const Joi = require('joi');

const Category = require('../models/filmCategory');
const filmCategoryJoi = require('../models/filmCategoryJoi');

const get = async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
}

const post = async (req, res) => {
    const category = await Category.create(req.body);
    res.json(category);
}

const put = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findByIdAndUpdate(id, req.body);
    res.json(category);
}

const remove = async (req, res) => {
    const { id } = req.params;
    
    const category = await Category.findByIdAndRemove( id)
    res.send({ success: true, id, category });
}

const checkData = (req, res, next) => {
    const { error } = Joi.validate(req.body, filmCategoryJoi);

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
