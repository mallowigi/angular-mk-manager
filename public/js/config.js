define(['angular', 'i18n', 'log', 'app'], function(angular, i18n, log, MarioKartManagerApp) {
	"use strict";

	//Setting up routes
	MarioKartManagerApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/roster', {
				templateUrl: 'views/roster/characterList.html',
			})
			.when('/roster/:selected', {
				templateUrl: 'views/roster/characterInfo.html',
			})
			.otherwise({
				templateUrl: 'views/index.html'
			});
	}]);

	//Removing tomcat unspported headers
	MarioKartManagerApp.config(['$httpProvider', function($httpProvider) {
		delete $httpProvider.defaults.headers.common["X-Requested-With"];
	}]);

	//Setting HTML5 Location Mode
	MarioKartManagerApp.config(['$locationProvider', function($locationProvider) {
//		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix("!");
	}]);

	//Setting i18next
	i18n.init({
		lng: 'en',
		detectLngQS: 'locale',
		cookieName: 'locale',
		supportedLngs: ['en'],
		fallbackLng: 'en',
		resGetPath: "locales/resources.json?lng=__lng__&ns=__ns__",
		dynamicLoad: true,
	});

	//Setting i18next with jQuery
	$.i18n.init({
		lng: 'en',
		detectLngQS: 'locale',
		cookieName: 'locale',
		supportedLngs: ['en'],
		fallbackLng: 'en',
		resGetPath: "locales/resources.json?lng=__lng__&ns=__ns__",
		dynamicLoad: true,
	});

	return MarioKartManagerApp;
});