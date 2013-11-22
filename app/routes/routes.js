module.exports = function(app, passport, auth) {
	'use strict';

	// users routes
	require('./users')(app, passport);

	// authentication routes
	require('./auth')(app, passport, auth);

	// tournaments
	require('./tournaments')(app, auth);

	// home route
	var index = require('../controllers/index');
	app.get('/', index.render);

	// Angular js routes: redirect to angular's index
//	app.all('/roster*', index.render);
//	app.get('/roster', index.roster);
//	app.get('*', index.render);
};
