var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

//create schema
var dishSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	}
},{
	timestamps: true
});

// create the model
var Dishes = mongoose.model('Dish', dishSchema);

// make it avaiable to our node app
module.exports = Dishes;
