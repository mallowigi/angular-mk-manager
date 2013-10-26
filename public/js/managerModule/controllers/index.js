/**
 * Created by Elior on 25/10/13.
 */
define(['require', 'angular'
	, './HeaderController'
	, './IndexController'
], function(require, angular, HeaderController, IndexController) {
	"use strict";
	console.log('Loading Controllers...');

	return angular.module('mk.managerModule.controllers', ['mk.managerModule.services'])
		.controller('HeaderController', ['$scope', '$location', 'User', HeaderController])
		.controller('IndexController', ['$scope', '$socket', '$t', IndexController]);

	// Then laod each controller individually
	//	require(['./headerCtrl'], function(HeaderCtrl) {
	//		ManagerControllersModule.controller('HeaderCtrl', ['$scope', '$location', 'User', HeaderCtrl]);
	//	});
})