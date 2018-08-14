const mongoose = require('mongoose');
const urlRegex = require('url-regex');

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        // required: [true, 'Id field is required']
    },
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
            message: () => `Arra has invalid links or contains less than 4!`
        },
        required: [true, 'Avatar field is required']
    },
    rating: {
        type: Number,
        min: [0, 'Rating should be between 0 & 5'],
        max: [5, 'Too few eggs']
    },
    category: Schema.Types.ObjectId
});

const Film = mongoose.model('film', FilmSchema);

module.exports = Film;
