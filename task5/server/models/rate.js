import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RateSchema = new Schema({
    rating: {
        type: Number,
        min: [0, 'Rating should be between 0 & 5'],
        max: [5, 'Too few eggs']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    film: {
        type: Schema.Types.ObjectId,
        ref: 'film'
    },
});

const Rate = mongoose.model('rate', RateSchema);

export default Rate;
