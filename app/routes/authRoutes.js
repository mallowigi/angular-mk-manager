/**
 * Created by Elior on 01/11/13.
 */
module.exports = function(app, passport){
	"use strict";

	// user controller actions
	var users = require('../controllers/UserAPI');

	app.get('/auth/facebook', passport.authenticate('facebook', {
		scope: [ 'email', 'user_about_me'],
		failureRedirect: '/signin'
	}), users.signin);
	app.get('/auth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/signin'
	}), users.authCallback);
	app.get('/auth/github', passport.authenticate('github', {
		failureRedirect: '/signin'
	}), users.signin);
	app.get('/auth/github/callback', passport.authenticate('github', {
		failureRedirect: '/signin'
	}), users.authCallback);
	app.get('/auth/twitter', passport.authenticate('twitter', {
		failureRedirect: '/signin'
	}), users.signin);
	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		failureRedirect: '/signin'
	}), users.authCallback);
	app.get('/auth/google', passport.authenticate('google', {
		failureRedirect: '/signin',
		scope: 'https://www.google.com/m8/feeds'
	}), users.signin);
	app.get('/auth/google/callback', passport.authenticate('google', {
		failureRedirect: '/signin',
		scope: 'https://www.google.com/m8/feeds'
	}), users.authCallback);
};
