import bodyParser from 'body-parser';
import cors from  'cors'
import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import morgan from 'morgan';
import passport from 'passport';
import path from 'path';
import rfs from 'rotating-file-stream';
import session from 'express-session';

require('dotenv').config({ path: 'variables.env' });
require('./config/passport');

import api from './routers/api';

const app = express();
const PORT = process.env.PORT || 3000;
const conncectUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/film-library`;

const logDirectory = path.join(__dirname, 'log');
const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory
});
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

mongoose.Promise = global.Promise;
(async () => { 
  try {
    await mongoose.connect(conncectUrl, { useNewUrlParser:true });

    app
      .use(cors())
      .use(session({ 
        secret: 'passport-tutorial',
        cookie: { maxAge: 60000 },
        resave: false,
        saveUninitialized: false 
      }))
      .use(passport.initialize())
      .use(passport.session())
      .use(bodyParser.json())
      .use(morgan('combined', {stream: accessLogStream}))
      .use('/api', api);
  } catch(error) {
    app.get('/:name*?', function(req, res){
      res.send({error: 'Problem with database connection'});
    });
  }
})();

app.listen(PORT, () => console.log(`This work on ${PORT} port`));
