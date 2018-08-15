
const Category = require('../models/filmCategory');

const get = (req, res) => {
    Category.find({})
        .then((categories) => {
            res.json(categories);
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
}

const post = (req, res) => {
    Category.create(req.body)
        .then((category) => {
            res.json(category);
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
}

const put = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndUpdate(id, req.body)
        .then((category) => {
            res.send(category);
        })
        .catch((error) => {
            res.status(400).json({ error });
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

module.exports = {
    get,
    post,
    put,
    remove
};
