/**
 * Created by eliorb on 25/11/13.
 */
/* global define */
define([], function() {
	"use strict";
	return function($scope, $logger, $routeParams, User, Tournament) {

		$logger.debug("Getting tournament %s", $routeParams.id);
		var tournamentId = $routeParams.id;

		Tournament.get({tournamentId: tournamentId}, function(response) {
			$logger.info('Successfully retrieved tournament from the server: %o', response);
			$scope.tournament = response;
		}, function() {
			$scope.error = "Cannot find the requested tournament";
		});
	};
});
