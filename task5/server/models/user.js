import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        minlength: [4, 'Your name is less than 4 symbols'],
        required: [true, 'Name field is required']
    },
    surname: {
        type: String,
        minlength: [4, 'Your surname is less than 4 symbols'],
        required: [true, 'Surname field is required']
    },
    email: {
        type: String,
        required: [true, 'email field is required']
    },
    // avatar: {
    //     type: String,
    //     validate: {
    //         validator: function(value) {
    //             return urlRegex({exact: true, strict: false}).test(value);
    //         },
    //         message: props => `${props.value} is not a valid link!`
    //     },
    //     required: [true, 'Avatar field is required']
    // },
    films: [{ 
        type: Schema.Types.Object, 
        ref: 'film'
    }],
    comments: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'comment'
    }]
});

const User = mongoose.model('user', UserSchema);

export default User;
