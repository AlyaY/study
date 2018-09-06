import Film from '../models/film';
import User from '../models/user';
import Rate from '../models/rate';


const average = (arr) => {
    return arr.reduce((res, {rating}) => res + rating, 0) / arr.length;
}

const addRate = async(req, res) => {
    const newRate = req.body;
    const rate = await Rate.findOneAndUpdate({film: newRate.film, user: newRate.user}, {rating: newRate.rating});
    
    if (!rate) { 
        rate = await Rate.create(newRate)

        await User.findOne(rate.user, (err, user) => {
            user.filmRate = [...user.filmRate, rate._id]
            user.save();
        });
    }

    await Film.findOne(rate.film, async (err, film) => {
        const rateArray = await Rate.find({film: rate.film});
        
        film.rating = average(rateArray).toFixed(2);
        film.save();
    });

    return res.json(rate);
}

export { addRate };
