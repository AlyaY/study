import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import rfs from 'rotating-file-stream';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';

require('dotenv').config({ path: 'variables.env' });

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
      .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        next();
      })
      .use(cookieSession({
        maxAge: 24 * 60 * 60 *1000
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
