var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

// connection URL
var url = 'mongodb://localhost:27017/conFusion';
// use connect method to connect to server
MongoClient.connect(url, function (err, db) {
	assert.equal(err,null);
	console.log('Connected to the server');

	var collection = db.collection('dishes');

	collection.insertOne({name: 'Uthapizza', description: 'tester'},
	function(err,result){
		assert.equal(err, null);
		console.log('After insert: ');
		console.log(result.ops);

		// find() empty array {} returns all docs found
		collection.find({}).toArray(function(err, docs){
			assert.equal(err, null);
			console.log('Found: ');
			console.log(docs);

			// drop/clean
			db.dropCollection('dishes', function(err,result){
				assert.equal(err, null);
				db.close();
			});

		});
	});
});