import passport from 'passport';

import User from '../models/user';

const signIn = async(req, res, next) => {
    const { body: { user } } = req;
  
    if(!user.email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
      if(err) {
        return next(err);
      }
  
      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
  
        return res.json({ user: user.toAuthJSON() });
      }

      return res.status(400).json(info);
    })(req, res, next);
}

const signUp = async(req, res) => {
    const { body: { user } } = req;
  
    if(!user.email) {
      return res.status(422).json({
        errors: {
          email: 'is required',
        },
      });
    }
  
    if(!user.password) {
      return res.status(422).json({
        errors: {
          password: 'is required',
        },
      });
    }
  
    const finalUser = await new User(user);
    finalUser.setPassword(user.password);
  
    await finalUser.save()
    res.json({ user: finalUser.toAuthJSON() });
}

export { signIn, signUp };
