/**
 * Module dependencies.
 */

exports.render = function(req, res) {
	'use strict';
	res.render('index', {
		user: req.user ? JSON.stringify(req.user) : "null"
	});
};
