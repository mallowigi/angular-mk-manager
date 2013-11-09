define(['angular', 'log'
	, 'ngCookies', 'ngResource', 'uiBootstrap'
	, 'services/socket.io'
	, 'services/i18next'
	, 'services/logger'
	, 'managerModule/managerModule'

], function(angular, log) {
	"use strict";
	var marioKartApp;
	log.debug('Initializing App...');

	marioKartApp = angular.module('mk', [
		'ngCookies',
		'ngResource',
		'ui.bootstrap',
		'ngSocket',
		'ng.i18next',
		'ngLogger',
		'mk.managerModule'
	]);

	return marioKartApp;
});

