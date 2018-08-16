const asyncHandler = fn => (req, res, next) => 
  Promise
    .resolve(fn(req, res, next))
    .catch((err) => {
        const error = err.message || err;
        res.status(400).send({error});
    })
  
module.exports = asyncHandler;
