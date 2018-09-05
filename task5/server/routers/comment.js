import express from 'express';

import asyncHandler from '../helpers/asyncHandler';
import { getFilm, findFilm } from '../controllers/filmController';

const router = express.Router();

router.route('/:id')
    .get(asyncHandler(getFilm));

router.route('/')
    .post(asyncHandler(findFilm));

export default router;
