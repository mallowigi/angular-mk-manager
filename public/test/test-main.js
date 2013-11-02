// Bootstrapping karma-requirejs

var tests = [];
for (var file in window.__karma__.files) {
	// Remove leading slash inserted by karma which triggered "no timestamp errors"
	window.__karma__.files[file.replace(/^\//, '')] = window.__karma__.files[file];

	// Put the files to test inside the tests array to be used as the deps config prop
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/Spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	// By default karma are served unto the path /base
	baseUrl: 'base/js',

	paths: {
		'domReady': '../lib/requirejs-domready/domReady',
		'jquery': '../lib/jquery/jquery.min',
		'i18n': '../lib/i18next/release/i18next.amd.withJQuery-1.7.1.min',
		'angular': '../lib/angular/angular',
		'ngCookies': '../lib/angular-cookies/angular-cookies',
		'ngResource': '../lib/angular-resource/angular-resource',
		'uiBootstrap': '../lib/angular-bootstrap/ui-bootstrap',
		'angularMocks': '../lib/angular-mocks/angular-mocks',
		'lodash': '../lib/lodash/dist/lodash',
		'log': '../lib/loglevel/lib/loglevel',
		// Unit tests folder
		'unit': '../test/spec',
		// Functional tests folder
		'func': '../test/functional',
		'mocks': '../test/mocks'
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
			deps: ['jquery', 'lodash', 'log'],
			exports: 'angular'
		},
		'ngCookies': ['angular'],
		'ngResource': ['angular'],
		'uiBootstrap': ['angular'],
		'angularMocks': ['angular']
	},
	// Prioritization
	priority: ['angular'],

	// Tests to run
	deps: tests,

	// Start test runner once requirejs is config
	callback: window.__karma__.start
});
