import express from 'express';

import asyncHandler from '../helpers/asyncHandler';
import { checkFilmData } from '../middlewares';
import { get, post, put, remove } from '../controllers/filmsController';

const router = express.Router();

router.route('/')
    .post(checkFilmData, asyncHandler(post));

router.route('/:page*?')
    .get(asyncHandler(get));

router.route('/:id')
    .put(checkFilmData, asyncHandler(put))
    .delete(asyncHandler(remove));

export default router;
