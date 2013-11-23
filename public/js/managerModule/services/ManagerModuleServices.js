/**
 * Created by Elior on 25/10/13.
 */
define(['require', 'angular'
	, 'log'
	, 'services/User'
	, './Roster'
], function(require, angular, log, UserService, RosterService) {
	"use strict";
	log.debug('Loading Manager services...');

	// Load the angular module
	return angular.module('mk.managerModule.services', [])
		.factory('Roster', ['$logger', RosterService]);

});
