const express = require('express');
const router = express.Router();

const helloWorld = require('./hello-world');
const films = require('./films');
const filmsCategories = require('./filmsCategories');

router
    .use('/hello-world', helloWorld)
    .use('/films/categories', filmsCategories)
    .use('/films', films);
  
module.exports = router;
