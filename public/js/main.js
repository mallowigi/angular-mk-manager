/**
 * Created by Elior on 24/10/13.
 */
requirejs.config({

	baseUrl: 'js',

	paths: {
		'domReady': "../lib/domReady",
		'jquery': '../lib/jquery',
		'i18n': '../lib/i18next.amd-1.7.1.min',
		'angular': '../lib/angular',
		'ngCookies': '../lib/angular-cookies',
		'ngResource': '../lib/angular-resource',
		'uiBootstrap': '../lib/ui-bootstrap-tpls',
		'lodash': '../lib/lodash',
		'log': '../lib/loglevel.min'
	},

	// AMD-readyisation
	shim: {
		'lodash': {
			exports: '_'
		},
		'jquery': {
			exports: '$'
		},
		'angular': {
			deps: ['jquery', 'log'],
			exports: 'angular'
		},
		'ngCookies': ['angular'],
		'ngResource': ['angular'],
		'uiBootstrap': ['angular']
	},
	// Prioritization
	priority: ['angular'],

	// Run init
	deps: ['init']

});

// config non-angular logger
require(['log'], function(log) {
	"use strict";
	log.setLevel('debug');
});
