// Load automatically all tests inside the __karma__.files array and put it in the 'deps' property
var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/Spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	// By default karma are served unto the path /base
	baseUrl: 'base/js',

	paths:{
		'domReady': '../lib/requirejs-domready/domReady',
		'jquery': '../lib/jquery/jquery.min',
		'i18n': '../lib/i18next/release/i18next.amd.withJQuery-1.7.1.min',
		'angular': '../lib/angular/angular',
		'ngCookies': '../lib/angular-cookies/angular-cookies',
		'ngResource': '../lib/angular-resource/angular-resource',
		'uiBootstrap': '../lib/angular-bootstrap/ui-bootstrap',
		'angularMocks': '../lib/angular-mocks/angular-mocks',
		'lodash':'../lib/lodash/dist/lodash',
		// Unit tests folder
		'unit': '../test/spec',
		// Functional tests folder
		'func': '../test/functional'
	},

	// AMD-readyisation
	shim: {
		'angular': {
			deps: ['jquery', 'lodash'],
			exports: 'angular'
		},
		'ngCookies': ['angular'],
		'ngResource': ['angular'],
		'uiBootstrap': ['angular'],
		'angularMocks': ['angular']
	},

	// Tests to run
	deps: tests,

	// Start test runner once requirejs is config
	callback: window.__karma__.start
});
