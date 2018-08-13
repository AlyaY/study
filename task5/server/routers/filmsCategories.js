const express = require('express');
const Joi = require('joi');

const categorySchema = require('../models/categorySchema');
const categories = require('../data/categories');

const router = express.Router();

const validateCategory = (category) => {
    console.log(Joi.validate(category, categorySchema));
    return Joi.validate(category, categorySchema).error;
}

router.route('/')
    .get((req, res) => {
        res.send(categories);
    })
    .post((req, res) => {
        categories.push(req.body);

        res.json(req.body);
    });

router.route('/:id')
    .put((req, res) => {
        const { id } = req.params;
        const category = categories.find((category) => category.id === id);

        if(category) {
            res.send(category);
        } else {
            res.send({});
        }
    })
    .delete((req, res) => {
        const { id } = req.params;
        let successDeleted = false;

        categories = categories.reduce((allcategories, category) => {
            if(category.id === id) {
                successDeleted = true;
            } else {
                allcategories.push(category);
            }

            return allcategories;
        }, []);

        res.send({ success: successDeleted, id });
    });
  
module.exports = router;