/**
 * Created by Elior on 24/10/13.
 */
require.config({

	baseUrl: 'js',

	paths: {
		'domReady': '../lib/requirejs-domready/domReady',
		'jquery': '../lib/jquery/jquery.min',
		'i18n': '../lib/i18next/release/i18next.amd.withJQuery-1.7.1.min',
		'angular': '../lib/angular/angular',
		'ngCookies': '../lib/angular-cookies/angular-cookies',
		'ngResource': '../lib/angular-resource/angular-resource',
		'uiBootstrap': '../lib/angular-bootstrap/ui-bootstrap',
		'lodash': '../lib/lodash/dist/lodash',
		'log': '../lib/loglevel/lib/loglevel'
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

	deps: ['init'],

});

// config non-angular logger
require(['log'], function(log) {
	"use strict";
	log.setLevel('trace');
});