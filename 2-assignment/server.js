var mongoose = require('mongoose'),
	assert = require('assert');

var Dishes = require('./models/dishes');
var Promos = require('./models/promos');
var Leaders = require('./models/leaders');

//Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function() {
	// we are in
	console.log('Connected to server!');
    // db.collection('dishes').drop();
    // db.collection('promos').drop();
    // db.collection('leaders').drop();

    // Dishes
	// create new dish
	Dishes.create({
		name: 'Uthapizza',
        description: 'Test dish',
        price: '22.90' ,
        image: '/images/pizza.png',
        category: 'main',
        // label: null,
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

// Promos
    // create new promo
    Promos.create({
        name: 'Promopizza',
        description: 'Test Promo',
        price: '22.90' ,
        image: '/images/promopizza.png',
    },
    function(err,promo) {
        if (err) throw err;

        console.log('Promo created');
        console.log(promo);
        var id = promo.id;

        //get all promos
        // time out is just for demo on terminal
        setTimeout(function() {
            Promos.findByIdAndUpdate(id, {
                $set: {
                    description: 'Updated promo'
                }
            }, {
                new: true // returns the updated record, otherwise it returns the record before the update
            })
            .exec(function (err, promo){
                if (err) throw err;
                console.log ('Updated promo!');
                console.log(promo);

                db.collection('promos').drop(function () {
                    db.close();
                });
            });
        }, 3000);
    });


// Leaders
    // create new leader
    Leaders.create({
        name: 'Leader Pizza',
        description: 'Leader description',
        image: '/images/mrpizza.png',
        designation: 'Cheff Pizza Man',
        abbr: 'Mr.',
    },
    function(err,leader) {
        if (err) throw err;

        console.log('Leader created');
        console.log(leader);
        var id = leader.id;

        //get all leaders
        // time out is just for demo on terminal
        setTimeout(function() {
            Leaders.findByIdAndUpdate(id, {
                $set: {
                    description: 'Updated leader description'
                }
            }, {
                new: true // returns the updated record, otherwise it returns the record before the update
            })
            .exec(function (err, leader){
                if (err) throw err;
                console.log ('Updated leader!');
                console.log(leader);

                db.collection('leaders').drop(function () {
                    db.close();
                });
            });
        }, 3000);
    });
});
