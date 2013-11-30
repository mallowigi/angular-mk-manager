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
    , logger = require('mean-logger')
    , mongoose = require('mongoose')
    , autoIncrement = require('mongoose-auto-increment')
    ;

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */
var mimosaConfig = require('./mimosa-config').config;

var startServer = function(mimosaConfig) {

    // Load configurations
    // if test env, load example file
    var env = process.env.NODE_ENV || mimosaConfig.server.env || 'development',
        port = process.env.port || mimosaConfig.server.port || 3000,
        config = require('./config/config')[env],
        auth = require('./config/middlewares/authorization'),
        ajaxAuth = require('./config/middlewares/ajaxAuth');

    // Bootstrap db connection
    var connect = mongoose.connect(config.db, function(err) {
        if (err) {
            throw err;
        }
        console.log('Connected successfully with MongoDB.');
    });

    autoIncrement.initialize(connect);

    // Bootstrap models
    var modelsPath = __dirname + '/app/models';
    fs.readdirSync(modelsPath).forEach(function(file) {
        require(modelsPath + '/' + file);
    });

    // bootstrap passport config
    require('./config/passport')(passport, config);

    var app = express();

    // express settings
    require('./config/express')(app, config, passport, mimosaConfig);

    // Bootstrap routes
    require('./app/routes/routes')(app, passport, auth, ajaxAuth);

    //i18next setings
    require('./config/i18next')(app, config);

    // Start the app by listening on <port>
    var server = app.listen(port);
    console.log('Express app started on port ' + port);

    // Socket.io start
    var io = require('./config/socket.io')(server, config);

    //Initializing logger
    logger.init(app, passport, mongoose);

    // expose app
    module.exports = server;

    // Then watch the server with mimosa
//    done(server, io);
};

startServer(mimosaConfig);
