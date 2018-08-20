import Film from '../models/film';
import Category from '../models/filmCategory';

const get = async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
}

const getFilms = async (req, res) => {
    const { id } = req.params;

    const {films} = await Category.findById(id).populate('films');

    res.json(films);
}

const post = async (req, res) => {
    const category = await Category.create(req.body);

    if (category || category.films) { 
        const films = await Film.find({
            '_id': { $in: category.films}
        });
        
        if (films.length) {
            films.forEach(async (film) => {
                await Film.findByIdAndUpdate(film._id, { 'category': category._id });
            })
        }
    }

    res.json(category);
}

const put = async (req, res) => {
    const { id } = req.params;

    const category = await Category.findByIdAndUpdate(id, req.body);
    res.json(category);
}

const remove = async (req, res) => {
    const { id } = req.params;
    
    const category = await Category.findByIdAndRemove(id);

    res.send({ success: true, id, category });
}

export { get, getFilms, post, put, remove };
