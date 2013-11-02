/**
 * Created by Elior on 01/11/13.
 */
define([], function() {
	'use strict';

	return function CharacterController($scope, $routeParams, $logger, Roster) {
		var selected, character;
		$logger.debug('Loading CharacterCtrl...');

		selected = $routeParams.selected;
		if (selected === void 0) {
			$scope.error = 'No character selected';
			return;
		}

		character = Roster[selected] || null;
		if (!character) {
			$scope.error = 'Cannot find the character ' + selected;
			return;
		}

		$scope.character = character;
	};

});