import express from 'express';
const router = express.Router();

import helloWorld from './hello-world';
import films from './films';
import filmsCategories from './filmsCategories';

router
    .use('/hello-world', helloWorld)
    .use('/films/categories', filmsCategories)
    .use('/films', films );
  
export default router;
