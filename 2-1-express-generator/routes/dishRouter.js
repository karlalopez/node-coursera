var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})
// define the home page route

router.get('/', function(req,res,next){
        res.end('Will send all the dishes to you!');
})

router.post('/', function(req, res, next){
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    
})

router.delete('/', function(req, res, next){
        res.end('Deleting all dishes');
});

// define the dish ID page route
router.get('/:dishId',function(req,res,next){
        res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
})

router.put('/:dishId', function(req, res, next){
        res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

router.delete('/:dishId', function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
});


module.exports = router;