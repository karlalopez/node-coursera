var mongoose = require('mongoose'),
	assert = require('assert');

var Dishes = require('./models/dishes-3');

//Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function() {
	// we are in
	console.log('Connected to server!');

	// create new dish
	Dishes.create({
		name: 'Uthappizza',
        description: 'Test dish',
        comments: [
            {
                rating: 3,
                comment: 'This is insane',
                author: 'Matt Daemon'
            }
        ]
    },
    function(err,dish) {
    	if (err) throw err;

    	console.log('Dish created');
    	console.log(dish);
    	var id = dish.id;

    	//get all dishes
    	// time out is just for demo on terminal
    	setTimeout(function() {
    		Dishes.findByIdAndUpdate(id, {
    			$set: {
    				description: 'Updated test'
    			}
    		}, {
    			new: true // returns the updated record, otherwise it returns the record before the update
    		})
    		.exec(function (err, dish){
    			if (err) throw err;
    			console.log ('Updated dish!');
    			console.log(dish);
    			
    			// push a comment
    			dish.comments.push({
    				rating: 5,
    				comment: 'I\'m getting a sinking feeling',
    				author: 'Leo diCarpaccio' 
    			});

    			dish.save(function (err, dish) {
    				console.log('Updated comments.');
    				console.log(dish);

					db.collection('dishes').drop(function () {
	            		db.close();
                    });
                });
            });
        }, 3000);
    });
});