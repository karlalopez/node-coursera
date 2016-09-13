var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

// create the sub schema
var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

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
	},
	comments: [commentSchema] //comments now points to an array with the commmentSchema
},{
	timestamps: true
});

// create the model
var Dishes = mongoose.model('Dish', dishSchema);

// make it avaiable to our node app
module.exports = Dishes;
