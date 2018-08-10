const express = require('express');
const bodyParser = require('body-parser');

const api = require('./routers/api');

const app = express();

const PORT = process.env.PORT || 3000;

app
  .use(bodyParser.json())
  .use('/api', api);
  
app.listen(PORT, () => console.log(`This work on ${PORT} port`));