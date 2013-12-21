module.exports = function(app, passport, auth, ajaxAuth) {
    'use strict';
    var index;

    // users routes
    require('./usersRoutes')(app, passport);

    // authentication routes
    require('./authRoutes')(app, passport, auth);

    // tournaments (AJAX)
    require('./tournamentsRoutes')(app, ajaxAuth);

    // Tracks
    require('./trackRoutes')(app, ajaxAuth);

    // home route
    index = require('../controllers/index');
    app.get('/', index.render);

    // Angular js routes: redirect to angular's index
    //	app.all('/roster*', index.render);
    //	app.get('/roster', index.roster);
    //	app.get('*', index.render);
};
