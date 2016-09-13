var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  hostname = ('localhost'),
  port = 3000,
  app = express();

app.use(morgan('dev'));

// Define page routes to specify which URLs will be handled by which controllers
var dishRouter = require('./dishRouter');
app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});





