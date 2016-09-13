var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

//create schema
var leaderSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
},{
	timestamps: true
});

// create the model
var Leaders = mongoose.model('Leader',leaderSchema);

// make it avaiable to our node app
module.exports = Leaders;
