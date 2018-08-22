import Film from '../models/film';
import Category from '../models/filmCategory';
import updateFilmsByCategory from '../helpers/updateFilmsByCategory';

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

    await updateFilmsByCategory(category, async (film) => {
        await Film.findByIdAndUpdate(film._id,  { 'category': category._id, 'hasCategory': true });
    });

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

    await updateFilmsByCategory(category, async (film) => {
        if (film.category.equals(category._id)) {
            await Film.findByIdAndUpdate(film._id,  { 'hasCategory': false });
        }
    });
 
    res.send({ success: true, id, category });
}

export { get, getFilms, post, put, remove };
