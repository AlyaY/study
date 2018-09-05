import express from 'express';

import { checkRateData } from '../middlewares';
import asyncHandler from '../helpers/asyncHandler';
import { addRate } from '../controllers/rateController';
import auth from '../helpers/auth';

const router = express.Router();

router.route('/')
    .post(auth.required, checkRateData, asyncHandler(addRate));

export default router;
