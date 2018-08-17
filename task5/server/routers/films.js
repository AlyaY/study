const express = require('express');

const asyncHandler = require('../helpers/asyncHandler');
const { get, post, put, remove, checkData} = require('../controllers/filmsController');

const router = express.Router();


router.route('/')
    .post(checkData, asyncHandler(post));

router.route('/:page*?')
    .get(asyncHandler(get));

router.route('/:id')
    .put(checkData, asyncHandler(put))
    .delete(asyncHandler(remove));
  
module.exports = router;