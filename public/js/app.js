define(['angular', 'log'
	, 'ngCookies', 'ngResource', 'uiBootstrap'
	, 'services/socket.io'
	, 'services/i18next'
	, 'managerModule/managerModule'

], function(angular, log) {
	"use strict";
	log.debug('Initializing App...');

	var MarioKartApp = angular.module('mk', [
		'ngCookies',
		'ngResource',
		'ui.bootstrap',
		'ngSocket',
		'ng.i18next',
		'mk.managerModule'
	]);

	return MarioKartApp;
});

