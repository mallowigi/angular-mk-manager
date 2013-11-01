

/**
 * Created by Elior on 01/11/13.
 */
module.exports = function(app, passport) {
	"use strict";
	// user controller actions
	var users = require('../controllers/users');

	app.get('/signin', users.signin);
	app.get('/signup', users.signup);
	app.get('/signout', users.signout);

	app.post('/users', users.create);
	app.post('/users/session', passport.authenticate('local', {
		failureRedirect: '/signin',
		failureFlash: 'Invalid email or password.'
	}), users.session);
	app.get('/users/me', users.me);
	app.get('/users/:userId', users.show);
	app.param('userId', users.user);
};
