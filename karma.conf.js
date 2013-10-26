// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function(config) {
	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: 'public',

		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			// hack to load RequireJS after the shim libs
			'../node_modules/karma-requirejs/lib/require.js',
			'../node_modules/karma-requirejs/lib/adapter.js',


			// we specify the files we want to test, without including them in order to be loaded by requirejs
			{pattern: 'lib/**/*.js', included: false},
			{pattern: 'js/**/*.js', included: false},
			{pattern: 'test/spec/**/*.js', included: false},

			// Requirejs main
			'test/test-main.js',

			//			'public/lib/jquery/jquery.min.js',
			//			'public/lib/i18next/release/i18next-1.7.1.min.js',
			//			'public/lib/angular/angular.min.js',
			//			'public/lib/angular-mocks/angular-mocks.js',
			//			'public/lib/angular-cookies/angular-cookies.min.js',
			//			'public/lib/angular-resource/angular-resource.min.js',
			//			'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
			//			'public/js/*.js',
			//			'public/js/**/*.js',
			//			'public/test/mock/**/*.js',
			//			'public/test/spec/**/*.js',
			//			'public/test/functional/**/*.js'

		],

		// list of files / patterns to exclude
		exclude: ['js/main.js'],

		// web server port
		port: 9876,

		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_WARN,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true
	});
};
