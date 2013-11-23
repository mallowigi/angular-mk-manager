/**
 * Created by eliorb on 23/11/13.
 */
/**
 * References the global services, directives, controllers and filters
 */
/* global define */
define(['angular'
	, 'services/User'
	, 'controllers/HeaderController'
], function(angular, UserService, HeaderController) {
	"use strict";
	var globalModule = angular.module('mk.global', []);

	// Global services
	globalModule
		.factory('User', ['$window', '$logger', UserService])
	;

	// Global controllers
	globalModule
		.controller('HeaderController', ['$scope', '$location', '$logger', 'User', HeaderController])
	;

	return globalModule;
});
