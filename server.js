/*!
 * nodejs-express-mongoose-angularjs-i18next-socket.io-demo
 * forked by Christopher EnyTC <chris.enytc@gmail.com>
 * Copyright(c) 2013 Madhusudhan Srinivasa <madhums8@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
'use strict';
var express = require('express')
	, fs = require('fs')
	, passport = require('passport')
	, logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development'
	, config = require('./config/config')[env]
	, auth = require('./config/middlewares/authorization')
	, mongoose = require('mongoose');

// Bootstrap db connection
mongoose.connect(config.db, function(err) {
	if (err) {
		throw err;
	}
	console.log('Connected successfully with MongoDB.');
});

// Bootstrap models
var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function(file) {
	require(modelsPath + '/' + file);
});

// bootstrap passport config
require('./config/passport')(passport, config);

var app = express();

// express settings
require('./config/express')(app, config, passport);

// Bootstrap routes
require('./app/routes/routes')(app, passport, auth);


//i18next setings
require('./config/i18next')(app, config);


// Start the app by listening on <port>
var port = process.env.PORT || 3000;
var server = app.listen(port);
console.log('Express app started on port ' + port);

// Socket.io start
require('./config/socket.io')(server, config);

//Initializing logger
logger.init(app, passport, mongoose);

// expose app
module.exports = app;