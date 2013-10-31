/**
 * Created by Elior on 25/10/13.
 */
define(['require', 'angular'
	, './User'
	, './Roster' ], function(require, angular, UserService, RosterService) {
	"use strict";
	console.log('Loading Manager services...');

	// Load the angular module
	return angular.module('mk.managerModule.services', [])
		.factory('User', ['$window', UserService])
		.service('Roster', [RosterService])

})