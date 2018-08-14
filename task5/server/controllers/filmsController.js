const Film = require('../models/film');

const get = (req, res) => {
    Film.find()
        .then((films) => {
            res.json(films);
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
}

const post = (req, res) => {
    Film.create(req.body)
        .then((film) => {
            res.json(film);
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
}

const put = (req, res) => {
    const { id } = req.params;
    
    Film.findByIdAndUpdate(id, req.body)
        .then((film) => {
            res.send(film);
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
}

const remove = (req, res) => {
    const { id } = req.params;

    Film.findByIdAndRemove(id)
        .then((film) => {
            res.send({ success: true, id, film });
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
