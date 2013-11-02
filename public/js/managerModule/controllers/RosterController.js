/**
 * Created by Elior on 31/10/13.
 */
define([], function() {
	"use strict";
	return function RosterController($scope, $routeParams, $logger, Roster, User) {
		var selected;
		$logger.debug('Loading Roster Controller...');

		$scope.user = User;
		$scope.characters = Roster;

		selected = $routeParams.selected || 'Mario';
		$scope.selected = $scope.characters[selected];
		$scope.isSelected = function(character){
			return $scope.selected.name === character.name;
		};
	};
});