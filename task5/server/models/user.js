import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

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
        type: Schema.Types.String,
        unique : true,
        required: [true, 'email field is required']
    },
    filmRate: [{ 
        type: Schema.Types.Object, 
        ref: 'rate'
    }],
    comment: [{ 
        type: Schema.Types.Object, 
        ref: 'comment'
    }],
    hash: {
        type: String
    },
    salt: {
        type: String
    },
});

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
}

UserSchema.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
    };
};

const User = mongoose.model('user', UserSchema);

export default User;
