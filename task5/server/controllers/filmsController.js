import Film from '../models/film';
import Category from '../models/filmCategory';
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

    await Category.findByIdAndUpdate

    if (film || film.category) { 
        const category = await Category.findById(film.category);
        
        if (category) {
            const films = [...category.films, film._id];
            await Category.findByIdAndUpdate(film.category, { films });
        }
    }

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
    
    if (film || film.category) { 
        const category = await Category.findById(film.category);
        
        if (category) {
            const films = category.films.filter((_id) => _id != id);
            await Category.findByIdAndUpdate(film.category, { films: films });
        }
    }

    res.send({ success: true, film });
}

export { get, post, put, remove };
