define(['angular', 'i18n', 'log', 'app'], function(angular, i18n, log, MarioKartManagerApp) {
	"use strict";

	/**
	 * Registers the loglevel logger inside angular
	 */
	MarioKartManagerApp.provider('$logger', function() {
		this.enableAll = function() {
			log.enableAll();
		};

		this.disableAll = function() {
			log.disableAll();
		};

		this.setLevel = function(level) {
			log.setLevel(level);
		};

		this.$get = function() {
			return {
				trace: log.trace,
				error: log.error,
				info: log.info,
				log: log.debug,
				debug: log.debug,
				warn: log.warn,
				critical: function(message) {
					log.error("!!!Critical error!!!");
					log.error(message);
				},
				errorWarn: function(error, warn){
					log.error(error);
					log.warn(warn);
				}
			};
		};
	});

	/*
	 Configures the angular log level here
	 */
	MarioKartManagerApp.config(['$loggerProvider', function($loggerProvider) {
		$loggerProvider.setLevel('info');
	}]);

	//Setting up routes
	MarioKartManagerApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/articles', { templateUrl: 'views/articles/list.html' }).
			when('/articles/create', { templateUrl: 'views/articles/create.html' }).
			when('/articles/:articleId/edit', { templateUrl: 'views/articles/edit.html' }).
			when('/articles/:articleId', { templateUrl: 'views/articles/view.html' }).
			when('/', { templateUrl: 'views/index.html'
				//				templateUrl: 'views/index.html',
				//				resolve: {
				//					// Ensure controllera are loaded before rendering
				//					load: ['$q', '$rootScope', function($q, $rootScope) {
				//						var deferred = $q.defer();
				//						require(['managerModule/managerModule'], function(ManagerModule) {
				//							console.log(ManagerModule);
				//							$rootScope.$apply(function() {
				//								deferred.resolve();
				//							});
				//						});
				//						return deferred.promise;
				//					}]
				//				}
			}).
			otherwise({redirectTo: '/'});
	}]);

	//Removing tomcat unspported headers
	MarioKartManagerApp.config(['$httpProvider', function($httpProvider) {
		delete $httpProvider.defaults.headers.common["X-Requested-With"];
	}]);

	//Setting HTML5 Location Mode
	MarioKartManagerApp.config(['$locationProvider', function($locationProvider) {
		//$locationProvider.html5Mode(true);
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