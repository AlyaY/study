
const Category = require('../models/filmCategory');

const get = (req, res) => {
    Category.find((err, categories) => {
        if (err) {
            return res.status(400).json({ error });
        }
        res.send(categories);
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

    Category.find({ _id: id }, (error, categories) => {
        if (error) {
            return res.status(400).json({ error });
        }

        res.send(categories);
    });
}

const remove = (req, res) => {
    const { id } = req.params;
    
    Category.deleteOne({ _id: id }, function (error) {
        if (error) {
            return res.status(400).send({ success: false, id });
        }

        res.send({ success: true, id });
    });
}

module.exports = {
    get,
    post,
    put,
    remove
};
