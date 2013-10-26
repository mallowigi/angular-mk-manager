define(['angular', 'i18n', 'app'], function(angular, i18n, MarioKartManagerApp) {
	"use strict";

	// Lazy loading since Angular is eager-loading by default
	//	MarioKartManagerApp.config(function($controllerProvider, $compileProvider, $filterProvider, $factoryProvider, $provide, $animationProvider) {
	//		MarioKartManagerApp.lazy = {
	//			controller: $controllerProvider.register,
	//			directive: $compileProvider.directive,
	//			filter: $filterProvider.register,
	//			factory: $provide.factory,
	//			service: $provide.service,
	//			animation: $animationProvider.register
	//		};
	//	})

	//Setting up route
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
	MarioKartManagerApp.config(['$httpProvider', function($httpProvider, Configuration) {
		//delete $httpProvider.defaults.headers.common["X-Requested-With"];
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