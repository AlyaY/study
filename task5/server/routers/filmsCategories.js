const express = require('express');

const { get, post, put, remove} = require('../controllers/filmsCategoriesController');

const router = express.Router();

router.route('/')
    .get(get)
    .post(post);

router.route('/:id')
    .put(put)
    .delete(remove);
  
module.exports = router;
