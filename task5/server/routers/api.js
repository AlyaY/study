import express from 'express';
const router = express.Router();

import auth from './auth';
import helloWorld from './hello-world';
import films from './films';
import film from './film';
import rate from './rate';
import comment from './comment';
import filmsCategories from './filmsCategories';

router
    .use('/hello-world', helloWorld)
    .use('/films/categories', filmsCategories)
    .use('/films', films)
    .use('/film', film)
    .use('/rate', rate)
    .use('/comment', comment)
    .use('/auth', auth);
  
export default router;
