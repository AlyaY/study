const express = require('express');

const asyncHandler = require('../helpers/asyncHandler');
const { checkFilmCategoriesData } = require('../middlewares');
const { get, getFilms, post, put, remove } = require('../controllers/filmsCategoriesController');

const router = express.Router();

router.route('/')
    .get(asyncHandler(get))
    .post(checkFilmCategoriesData, asyncHandler(post));

router.route('/:id')
    .get(asyncHandler(getFilms))
    .put(checkFilmCategoriesData, asyncHandler(put))
    .delete(asyncHandler(remove));
  
module.exports = router;
