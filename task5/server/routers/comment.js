import express from 'express';

import { checkCommentData } from '../middlewares';
import asyncHandler from '../helpers/asyncHandler';
import { addComment } from '../controllers/commentController';
import auth from '../helpers/auth';

const router = express.Router();

router.route('/')
    .post(auth.required, checkCommentData, asyncHandler(addComment));

export default router;
