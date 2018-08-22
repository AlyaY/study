import Film from '../models/film';

const updateFilmsByCategory = async (category, cb) => {

    if (category && category.films) { 
        const films = await Film.find({
            '_id': { $in: category.films}
        });

        if (films.length) {
            films.forEach(cb);
        }
    }
}

export default updateFilmsByCategory;