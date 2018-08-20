import express from 'express';

import asyncHandler from '../helpers/asyncHandler';
import { checkFilmCategoriesData } from '../middlewares';
import { get, getFilms, post, put, remove } from '../controllers/filmsCategoriesController';

const router = express.Router();

router.route('/')
    .get(asyncHandler(get))
    .post(checkFilmCategoriesData, asyncHandler(post));

router.route('/:id')
    .get(asyncHandler(getFilms))
    .put(checkFilmCategoriesData, asyncHandler(put))
    .delete(asyncHandler(remove));
  
export default router;
