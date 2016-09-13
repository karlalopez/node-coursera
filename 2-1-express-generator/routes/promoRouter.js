var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})
// define the home page route

router.get('/', function(req,res,next){
        res.end('Will send all the promos to you!');
})

router.post('/', function(req, res, next){
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);    
})

router.delete('/', function(req, res, next){
        res.end('Deleting all promos');
});

// define the promo ID page route
router.get('/:promoId',function(req,res,next){
        res.end('Will send details of the promo: ' + req.params.promoId +' to you!');
})

router.put('/:promoId', function(req, res, next){
        res.write('Updating the promo: ' + req.params.promoId + '\n');
    res.end('Will update the promo: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

router.delete('/:promoId', function(req, res, next){
        res.end('Deleting promo: ' + req.params.promoId);
});


module.exports = router;