import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: {
        type: String,
        minlength: [3, 'Your description is less than 3 symbols'],
        maxlength: [200, 'Your description is more than 200 symbols']
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: { 
        type: Schema.Types.Object, 
        ref: 'user'
    },
    film: {
        type: Schema.Types.Object, 
        ref: 'film'
    }
});

const Comment = mongoose.model('comment', CommentSchema);

export default Comment;
