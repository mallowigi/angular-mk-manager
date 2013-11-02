/**
 * Created by Elior on 25/10/13.
 */
define(['require', 'angular'
	, 'log'
	, './HeaderController'
	, './IndexController'
	, './RosterController'
	, './CharacterController'
], function(require, angular, log, HeaderController, IndexController, RosterController, CharacterController) {
	"use strict";
	log.debug('Loading Manager Controllers...');

	return angular.module('mk.managerModule.controllers', ['mk.managerModule.services'])
		.controller('HeaderController', ['$scope', '$location', '$logger', 'User', HeaderController])
		.controller('IndexController', ['$scope', '$socket', '$t', IndexController])
		.controller('RosterController', ['$scope', '$routeParams', '$logger', 'Roster', 'User', RosterController])
		.controller('CharacterController', ['$scope', '$routeParams', '$logger', 'Roster', CharacterController]);

});