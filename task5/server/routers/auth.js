import express from 'express';

import asyncHandler from '../helpers/asyncHandler';
import { signIn, signUp } from '../controllers/authController';
import auth from '../helpers/auth';

const router = express.Router();

router.post('/', asyncHandler(signUp));
router.post('/login', auth.optional, asyncHandler(signIn));

export default router;