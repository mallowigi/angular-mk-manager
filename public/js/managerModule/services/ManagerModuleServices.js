/**
 * Created by Elior on 25/10/13.
 */
define(['require', 'angular'
	, 'log'
	, './User'
	, './Roster' ], function(require, angular, log, UserService, RosterService) {
	"use strict";
	log.debug('Loading Manager services...');

	// Load the angular module
	return angular.module('mk.managerModule.services', [])
		.factory('User', ['$window', '$logger', UserService])
		.service('Roster', ['$logger', RosterService]);

});