const Film = require('../models/film');

const get = (req, res) => {
    Film.find((err, films) => {
        if (err) {
            return res.status(400).json({ error });
        }
        res.send(films);
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

    Film.find({ _id: id }, (error, films) => {
        if (error) {
            return res.status(400).json({ error });
        }

        res.send(films);
    });
}

const remove = (req, res) => {
    const { id } = req.params;

    Film.deleteOne({ _id: id }, function (error) {
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
