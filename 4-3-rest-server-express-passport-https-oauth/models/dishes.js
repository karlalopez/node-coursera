var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

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
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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
    price: {
        type:Currency,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String, 
        default: null,
        required: false
    },
	comments: [commentSchema] //comments now points to an array with the commmentSchema
},{
	timestamps: true
});

// create the model
var Dishes = mongoose.model('Dish', dishSchema);

// make it avaiable to our node app
module.exports = Dishes;
