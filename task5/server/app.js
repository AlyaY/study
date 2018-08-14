const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');
const mongoose = require('mongoose');

const api = require('./routers/api');

const app = express();
const PORT = process.env.PORT || 3000;

const logDirectory = path.join(__dirname, 'log');
const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory
});

// mongoose.connect('mongodb://alya:1qazxsw2#edc@ds119702.mlab.com:19702/film-library', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/film-library',  { useNewUrlParser: true })
mongoose.Promise = global.Promise;

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

app
  .use(bodyParser.json())
  .use(morgan('combined', {stream: accessLogStream}))
  .use('/api', api);
  
app.listen(PORT, () => console.log(`This work on ${PORT} port`));