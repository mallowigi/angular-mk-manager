module.exports = function(app, passport, auth) {
	'use strict';

	// users routes
	require('./users')(app, passport);

	// authentication routes
	require('./auth')(app, passport, auth);

	// home route
	var index = require('../controllers/index');
	app.get('/', index.render);

};
