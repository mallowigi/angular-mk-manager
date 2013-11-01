/**
 * Created by Elior on 25/10/13.
 */
define(['require', 'angular'
	, './HeaderController'
	, './IndexController'
	, './RosterController'
], function(require, angular, HeaderController, IndexController, RosterController) {
	"use strict";
	console.log('Loading Controllers...');

	return angular.module('mk.managerModule.controllers', ['mk.managerModule.services'])
		.controller('HeaderController', ['$scope', '$location', 'User', HeaderController])
		.controller('IndexController', ['$scope', '$socket', '$t', IndexController])
		.controller('RosterController', ['$scope', '$routeParams', 'Roster', 'User', RosterController])

});