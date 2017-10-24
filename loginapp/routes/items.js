var express = require('express');
var router = express.Router();
var passport =require('passport');
var LocalStrategy = require('passport-local').Strategy;



router.get('/product', function(req, res){
	res.render('product');
});



var Item = require('../models/items');

//Register Product
router.post('/product', function(req, res){
		var name = req.body.name;
		var price = req.body.price;

		//Validation
		req.checkBody('name', 'Name is required').notEmpty();
		req.checkBody('price', 'Price is required').notEmpty();
		
		var errors = req.validationErrors();

		if(errors){
			res.render('product', {
				errors:errors
			});
		}
		else {
			var newItem = new Item({
				name: name,
				price: price
			});

			Item.createItems(newItem, function(err, item){
				if(err) throw err;
				console.log(item);
			});

			req.flash('success_msg', 'Product Added!');
			res.redirect('/product');

		}
});

router.get('/product', function(req, res){
	
});


module.exports = router;