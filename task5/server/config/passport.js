import passport from 'passport';
import LocalStrategy from 'passport-local';

import User from '../models/user';

passport.use(new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]',
}, async (email, password, done) => {
    
    try {
        const user = await User.findOne({ email });

        if(!user) {
            return done(null, false, { error: { 'email': 'is invalid' } });
        }

        if(!user.validatePassword(password)) {
            return done(null, false, { error: { 'password': 'is invalid' } });
        }
    
        return done(null, user);
    } catch(err) {
        done(err);
    }
}));