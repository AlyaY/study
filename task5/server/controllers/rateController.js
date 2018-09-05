import Film from '../models/film';
import User from '../models/user';
import Rate from '../models/rate';

const addRate = async(req, res) => {
    const newRate = req.body;
    const rate = await Rate.findOneAndUpdate({film: newRate.film, user: newRate.user}, {rating: newRate.rating});
    
    if (!rate) { 
        rate = await Rate.create(newRate)

        User.findOne(rate.user, (err, user) => {
            user.filmRate = [...user.filmRate, rate._id]
            user.save();
        });
    }

    Film.findOne(rate.film, async (err, film) => {
        const rateArray = await Rate.find({film: rate.film});
        
        film.rating = Math.round(rateArray.reduce((res, cur) => res + cur.rating, 0) / rateArray.length);
        film.save();
    });

    return res.json(rate);
}

export { addRate };
