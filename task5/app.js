const express = require('express');

const api = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api', api);
app.listen(PORT, () => console.log(`This work on ${PORT} port`));