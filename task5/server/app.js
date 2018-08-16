const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: 'variables.env' });

const rfs = require('rotating-file-stream');
const mongoose = require('mongoose');

const api = require('./routers/api');

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
  mongoose.connect(conncectUrl, { useNewUrlParser:true })
    .then(() => {
      app
        .use(bodyParser.json())
        .use(morgan('combined', {stream: accessLogStream}))
        .use('/api', api);
    })
    .catch((err) => {
      app.get('/', function(req, res){
        res.send({errro: 'Problem with database connection'});
      });
    });
})();

app.listen(PORT, () => console.log(`This work on ${PORT} port`));
