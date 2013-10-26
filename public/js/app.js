define(['angular', 'ngCookies', 'ngResource', 'uiBootstrap'
	, 'services/socket.io'
	, 'services/i18next'
	, 'managerModule/managerModule'

], function(angular) {
	"use strict";
	console.log('Initializing App...');

	var MarioKartApp = angular.module('mk', [
		'ngCookies',
		'ngResource',
		'ui.bootstrap',
		'ngSocket',
		'ng.i18next',
		'mk.managerModule'
	]);

	return MarioKartApp;
})

