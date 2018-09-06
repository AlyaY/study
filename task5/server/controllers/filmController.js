import Film from '../models/film';

const getFilm = async (req, res) => {
    const { id } = req.params;
    
    const film = await Film.findById(id, req.body);
    res.json(film);
}

const findFilm = async (req, res) => {
    const { search } = req.body;
    
    const film = await Film.find({ "title": { "$regex": search, "$options": "i" }});

    res.json(film);
}
 
export { getFilm, findFilm };
