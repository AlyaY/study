import mongoose from 'mongoose';
import urlRegex from 'url-regex';

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    title: {
        type: String,
        minlength: [3, 'Your title is less than 3 symbols'],
        required: [true, 'Title field is required']
    },
    description: {
        type: String,
        minlength: [3, 'Your description is less than 3 symbols'],
        maxlength: [500, 'Your description is more than 500 symbols'],
        required: [true, 'Description field is required']
    },
    avatar: {
        type: String,
        validate: {
            validator: function(value) {
                return urlRegex({exact: true, strict: false}).test(value);
            },
            message: props => `${props.value} is not a valid link!`
        },
        required: [true, 'Avatar field is required']
    },
    gallery: {
        type: Array,
        validate : {
            validator : function(array) {
                const isLinksValid = array.every((value) => {
                    return urlRegex({exact: true, strict: false}).test(value);
                });

                return isLinksValid && array.length >= 4;
            },
            message: () => `Array has invalid links or contains less than 4!`
        },
        required: [true, 'Avatar field is required']
    },
    rating: {
        type: Number,
        min: [0, 'Rating should be between 0 & 5'],
        max: [5, 'Too few eggs']
    },
    category: { 
        type: Schema.Types.ObjectId,
        ref: 'filmCategory'
    }
});

const Film = mongoose.model('film', FilmSchema);

export default Film;
