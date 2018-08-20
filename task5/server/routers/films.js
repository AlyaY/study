const express = require('express');

const asyncHandler = require('../helpers/asyncHandler');
const { checkFilmData } = require('../middlewares');
const { get, post, put, remove } = require('../controllers/filmsController');

const router = express.Router();


router.route('/')
    .post(checkFilmData, asyncHandler(post));

router.route('/:page*?')
    .get(asyncHandler(get));

router.route('/:id')
    .put(checkFilmData, asyncHandler(put))
    .delete(asyncHandler(remove));
  
module.exports = router;