const express = require('express');

const { get, post, put, remove, checkData} = require('../controllers/filmsCategoriesController');

const router = express.Router();

router.route('/')
    .get(get)
    .post(checkData, post);

router.route('/:id')
    .put(put)
    .delete(remove);
  
module.exports = router;
