/*
 *  Generic require login routing middleware
 */

exports.requiresLogin = function(req, res, next) {
	'use strict';
	if (!req.isAuthenticated()) {
		return res.redirect('/signin');
	}
	return next();
};

/*
 *  User authorizations routing middleware
 */

exports.user = {
	hasAuthorization: function(req, res, next) {
		'use strict';
		if (req.profile.id !== req.user.id) {
			return res.redirect('/users/' + req.profile.id);
		}
		return next();
	}
};
