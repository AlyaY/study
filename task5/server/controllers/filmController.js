import Film from '../models/film';

const getFilm = async (req, res) => {
    const { id } = req.params;
    
    const film = await Film.findById(id, req.body);
    res.json(film);
}

export { getFilm };
