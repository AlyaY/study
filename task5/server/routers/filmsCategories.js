const express = require('express');

const asyncHandler = require('../helpers/asyncHandler');
const { get, getFilms, post, put, remove, checkData} = require('../controllers/filmsCategoriesController');

const router = express.Router();

router.route('/')
    .get(asyncHandler(get))
    .post(checkData, asyncHandler(post));

router.route('/:id')
    .get(asyncHandler(getFilms))
    .put(checkData, asyncHandler(put))
    .delete(asyncHandler(remove));
  
module.exports = router;
