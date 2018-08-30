import express from 'express';

import asyncHandler from '../helpers/asyncHandler';
import { getFilm } from '../controllers/filmController';

const router = express.Router();

router.route('/:id')
    .get(asyncHandler(getFilm));

export default router;
