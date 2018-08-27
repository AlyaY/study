import express from 'express';

import asyncHandler from '../helpers/asyncHandler';
import { auth, signIn, signUp } from '../controllers/authController';

const router = express.Router();

router.post('/', asyncHandler(signUp));
router.post('/login', auth.optional, asyncHandler(signIn));

export default router;