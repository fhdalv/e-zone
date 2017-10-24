var mongoose = require('mongoose');

//Item Schema
var ItemSchema = mongoose.Schema({
	name: {
		type: String,
		index: true
	},
	price: {
		type: String,
		required: true
	}
});

//To Access this outside the file
var Item = module.exports = mongoose.model('Item', ItemSchema);

module.exports.createItems = function(newItem, callback){
	Item.create(newItem, callback);
}