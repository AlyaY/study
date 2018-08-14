const Joi = require('joi');

let categories = require('../data/categories');
const categorySchema = require('../models/categorySchema');

const validateCategory = (category) => {
    return Joi.validate(category, categorySchema).error;
}

const get = (req, res) => {
    res.send(categories);
}

const post = (req, res) => {
    const error = validateCategory(req.body);
    
    if(error) {
        res.status(400).json(error.details[0].message);
    } else {
        categories.push(req.body);
        res.json(req.body);
    }
}

const put = (req, res) => {
    const { id } = req.params;
    const category = categories.find((category) => category.id === id);

    if(category) {
        res.send(category);
    } else {
        res.status(400).send({ error: 'There is no such category'})
    }
}

const remove = (req, res) => {
    const { id } = req.params;
    let successDeleted = false;

    categories = categories.reduce((allCategories, category) => {
        if(category.id === id) {
            successDeleted = true;
        } else {
            allCategories.push(category);
        }

        return allCategories;
    }, []);


    if(successDeleted) {
        res.send({ success: successDeleted, id });
    } else {
        res.status(400).send({ success: successDeleted, id });
    }
}

module.exports = {
    get,
    post,
    put,
    remove
};
