module.exports = function(app, passport, auth, ajaxAuth) {
    'use strict';
    var index;

    // users routes
    require('./users')(app, passport);

    // authentication routes
    require('./auth')(app, passport, auth);

    // tournaments (AJAX)
    require('./tournaments')(app, ajaxAuth);

    // home route
    index = require('../controllers/index');
    app.get('/', index.render);

    // Angular js routes: redirect to angular's index
    //	app.all('/roster*', index.render);
    //	app.get('/roster', index.roster);
    //	app.get('*', index.render);
};
