import Film from '../models/film';
import {FILMS_PER_PAGE, INITIAL_PAGE} from '../constants/index';

const get = async (req, res) => {
    const page = Number.parseInt(req.params.page) || INITIAL_PAGE;
    const perPage = Number.parseInt(req.query.perpage) || FILMS_PER_PAGE;
    
    const films = await Film.find({})
        .skip((perPage * page) - perPage)
        .limit(perPage);
    res.json(films);
}

const post = async(req, res) => {
    const film = await Film.create(req.body);
    res.json(film);
}

const put = async (req, res) => {
    const { id } = req.params;

    const film = await Film.findByIdAndUpdate(id, req.body);
    res.json(film);
}

const remove = async (req, res) => {
    const { id } = req.params;

    const film = await Film.findByIdAndRemove(id);
    res.send({ success: true, film });
}

export { get, post, put, remove };
