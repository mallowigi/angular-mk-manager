/**
 * Created by Elior on 25/10/13.
 */
define(['require', 'angular', './User'], function(require, angular, UserService) {
	"use strict";
	console.log('Loading Manager services...');

	// Load the angular module
	return angular.module('mk.managerModule.services', [])
		.factory('User',['$window', UserService]);

	// Then load each service individually
//	require(['./User'], function(UserService) {
//		ManagerServicesModule.factory('User', ['$window', UserService]);
//	});
})