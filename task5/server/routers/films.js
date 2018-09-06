import express from 'express';

import asyncHandler from '../helpers/asyncHandler';
import { checkFilmData } from '../middlewares';
import { get, post, put, remove } from '../controllers/filmsController';
import auth from '../helpers/auth';

const router = express.Router();

// For testing
router.route('/test')
    .get(auth.required, async (req, res) => {
        const { payload: { id } } = req;
        
        res.json({succsess: true, msg: 'You have access', id});
    });

router.route('/')
    .post(checkFilmData, asyncHandler(post));

router.route('/:page*?')
        .get(asyncHandler(get));
    
router.route('/:id')
    .put(checkFilmData, asyncHandler(put))
    .delete(asyncHandler(remove));
    
export default router;
