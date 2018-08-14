const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FilmCategorySchema = new Schema({
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
    films: {
        type: [Schema.Types.ObjectId],
        required: [true, 'Films are required']
    }
});

const FilmCategory = mongoose.model('filmCategory', FilmCategorySchema);

module.exports = FilmCategory;