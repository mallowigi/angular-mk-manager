/**
 * Module dependencies.
 */

var express = require('express')
	, mongoStore = require('connect-mongo')(express)
	, flash = require('connect-flash')
	, helpers = require('view-helpers')
	, i18n = require('i18next');

/**
 * Configure the express server
 * @param app the server
 * @param config the express config
 * @param passport the passport config
 * @param mimosa the mimosa config
 */
module.exports = function(app, config, passport, mimosa) {
	'use strict';
	app.set('showStackError', true);

	// should be placed before express.static
	/**
	 * Compress response with gzip/deflate.
	 * Options: filter: specify which files to compress
	 * - threshold: Only compress if the byte size is above the threshold
	 * - chunkSize: size of chunks
	 * - level: compression level
	 * - memLvel: memory level
	 * - strategy: compression strategy (RLE, Huffman... see zlib)
	 */
	app.use(express.compress({
		filter: function(req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	/**
	 * connect.favicon(path, options)
	 * Define the favicon to use (default ../public/favicon.ico).
	 * Options: maxAge: cache max time
	 */
	app.use(express.favicon());

	/**
	 * Serves the /public directory at the server address
	 */
	app.use(express.static(config.root + '/public'));



	// don't use logger for test env
	if (process.env.NODE_ENV !== 'test') {
		app.use(express.logger('dev'));
	}

	var viewsPath = mimosa.server.views.path || '/app/views';
	// set views path, template engine and default layout
	app.set('views', viewsPath);
	app.set('view engine', mimosa.server.views.compileWith || 'jade');

	// enable jsonp
	app.enable("jsonp callback");

	/**
	 * Populate res.cookies from the cookie headers
	 * Params: optional secret string to set in req.secret
	 */
	app.use(express.cookieParser());

	/**
	 * Parse request bodies of type json, formencoded and multipart
	 */
	app.use(express.bodyParser());

	/**
	 * Method overriding (param: optional key, default _method)
	 * Checks whether there is a post variable _method or a header x-method-override and replaces the given method with it.
	 * It is used for older browsers that don't support PUT or DELETE for instance
	 */
	app.use(express.methodOverride());

	/**
	 * Uses session store to persist data across requests. Must be defined after cookieParser and bodyParser.
	 * Uses MemoryStore by default, here we use MongoDB store.
	 *
	 * Saves the session into the store with a session id. If there is already a session defined, return it.
	 * Uses the given secret to authorize sessions. It is used to sign cookies to prevent identity forging. (Default: TLS)
	 *
	 * If there was no cookie for this domain, signs the cookie and sets it (Set-Cookie).
	 * Then when the server finishes writing the response, saves and reset the session. If there was no session, generate a sessionID.
	 *
	 * The sessions will be stored under the database 'sessions'
	 */
	app.use(express.session({
		secret: 'Mallowigi',
		store: new mongoStore({
			url: config.db,
			collection: 'sessions'
		})
	}));

	/**
	 * Flash notifications (info, success, error, warning). Saves the flash message on the sessions store.
	 * Usage: flash(type, msg). Msg can be a format string (cf Node util.format) with variable params, or an array.
	 * flash(type) : pops the messages of type.
	 * flash(): pops all messages
	 */
	app.use(flash());

	/**
	 * Jade view helpers. Sets a bunch of properties/methods under the res.locals property.
	 * Ex: appName, title, isActive(link), flash() (push notifications)
	 * Redefines res.render to use the locals.
	 *
	 * Plus, checks if the user is on a mobile Useragent and renders the mobile view if there is one.
	 */
	app.use(helpers(config.app.name));

	/**
	 * Initializes the session to be used with the passport strategy.
	 * Requires session to be defined.
	 */
	app.use(passport.initialize());
	/**
	 * Authenticates the user for the session. Uses the SessionStrategy for this.
	 * A SessionStrategy will parse req.session to find a user property defined inside.
	 * It will then check on the 'users' db for a user with the given id, if it is not found, it will delete the session for this user.
	 * If it is found, sets req.user to the given user and passes to the next middleware.
	 */
	app.use(passport.session());

	/**
	 * Uses the i18n wrapper to solve internationalization. Config in config/i18next.
	 * If the current url is in the i18n ignoreRoutes, do nothing.
	 * Detects the language from path, query, cookie or header, if specified in the conf. Otherwise use en.
	 * Sets req.locale and req.lng
	 *
	 * If there is req.locals (view helpers), sets req.locals.t, a function that look up for a given message in the i18n messages table,
	 * and returns the string according to the registered locale.
	 *
	 * If option useCookie, stores the locale in the cookie.
	 */
	app.use(i18n.handle);

	/**
	 * Express router. Listens to route changes in the url, does all the routing functions (pattern matching, redirects,
	 * parameters and dispatch).
	 * This is mandatory in order to use express routes (app.get, app.post...)
	 */
	app.use(app.router);

	/**
	 * Serving errors 500 and 404 page.
	 */
	app.use(function(err, req, res, next) {
		// treat as 404
		if (~err.message.indexOf('not found')) {
			return next();
		}

		// log it
		console.error(err.stack);

		// error page
		res.status(500).render('500', { error: err.stack });
	});

	// assume 404 since no middleware responded
	app.use(function(req, res) {
		res.status(404).render('404', { url: req.originalUrl, error: 'Not found' });
	});

};
