var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


//create schema
var promoSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
    image: {
        type: String,
        required: true
    },
    price: {
        type:Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},{
	timestamps: true
});

// create the model
var Promos = mongoose.model('Promo', promoSchema);

// make it avaiable to our node app
module.exports = Promos;
