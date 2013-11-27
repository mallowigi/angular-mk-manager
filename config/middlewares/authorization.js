/*
 *  Generic require login routing middleware
 */

exports.requiresLogin = function(req, res, next) {
	'use strict';
	if (!req.isAuthenticated()) {
		return res.redirect('/signin');
	}
	next();
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
		next();
	}
};

/*
 *  Article authorizations routing middleware
 */

exports.article = {
	hasAuthorization: function(req, res, next) {
		'use strict';
		if (req.article.user.id !== req.user.id) {
			return res.redirect('/articles/' + req.article.id);
		}
		next();
	}
};
