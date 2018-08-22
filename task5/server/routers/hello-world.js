import express from 'express';
const router = express.Router();

router.get('/:name*?', (req, res) => {
    const { name } = req.params;
    
    if(name) {
        res.send(`Hello ${name}`);

    } else {
        res.status(400).send({ error: 'There should be \"name\" paremeter!'})
    }
});
  
export default router;
