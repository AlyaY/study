import Film from '../models/film';
import User from '../models/user';
import Comment from '../models/comment';

const addComment = async(req, res) => {
    const newComment = req.body;
    
    const comment = await Comment.create(newComment);

    await User.findOne(rate.user, (err, user) => {
        user.comment = [...user.comment, comment._id];
        user.save();
    });

    await Film.findOne(rate.film, async (err, film) => {
        film.comment = [...user.comment, comment._id];
        film.save();
    });

    return res.json(rate);
}

export { addComment };