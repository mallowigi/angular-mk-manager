/**
 * Created by Elior on 31/10/13.
 */
define(['angular'], function(angular) {
	"use strict";
	return function RosterController($scope, $routeParams, Roster, User) {
		$scope.user = User;
		$scope.characters = Roster;
	}
})