var express = require('express');
var router = express.Router();

//Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

router.get('/items/product', ensureAuthenticated, function(req, res){
	res.render('product');
});


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg', 'You are not logged in!');
		res.redirect('/users/login');
		req.flash('error_msg', 'You are not logged in!');
	}
}

module.exports = router;