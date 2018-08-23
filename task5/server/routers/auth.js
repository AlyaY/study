import express from 'express';

import asyncHandler from '../helpers/asyncHandler';
import { checkFilmData } from '../middlewares';
import { logout, login } from '../controllers/filmsController';

const router = express.Router();

router.route('/login')
    .post(checkFilmData, asyncHandler(login));

router.route('/logout')
    .post(checkFilmData, asyncHandler(logout));

export default router;