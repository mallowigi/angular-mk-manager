/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
	, User = mongoose.model('User');

//exports.signin = function (req, res) {}

/**
 * Auth callback
 */

exports.authCallback = function(req, res) {
	'use strict';
	res.redirect('/');
};

/**
 * Show login form
 */

exports.signin = function(req, res) {
	'use strict';
	res.render('users/signin', {
		title: 'Signin',
		message: req.flash('error', '')
	});
};

/**
 * Show sign up form
 */

exports.signup = function(req, res) {
	'use strict';
	res.render('users/signup', {
		title: 'Sign up',
		user: new User()
	});
};

/**
 * Logout
 */

exports.signout = function(req, res) {
	'use strict';
	req.logout();
	res.redirect('/');
};

/**
 * Session
 */

exports.session = function(req, res) {
	'use strict';
	res.redirect('/');
};

/**
 * Create user
 */

exports.create = function(req, res, next) {
	'use strict';
	var user = new User(req.body);
	user.provider = 'local';
	user.save(function(err) {
		if (err) {
			return res.render('users/signup', { errors: err.errors, user: user });
		}
		req.logIn(user, function(err) {
			if (err) {
				return next(err);
			}
			return res.redirect('/');
		});
	});
};

/**
 *  Show profile
 */

exports.show = function(req, res) {
	'use strict';
	var user = req.profile;
	res.render('users/show', {
		title: user.name,
		user: user
	});
};

exports.me = function(req, res) {
	'use strict';
	res.jsonp(req.user || null);
};

/**
 * Find user by id
 */

exports.user = function(req, res, next, id) {
	'use strict';
	User.findOne({ _id: id })
		.exec(function(err, user) {
			if (err) {
				return next(err);
			}
			if (!user) {
				return next(new Error('Failed to load User ' + id));
			}
			req.profile = user;
			next();
		});
};
