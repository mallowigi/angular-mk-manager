/* global define */
define([
], function() {
	"use strict";
	return function TournamentsController ($scope, $logger, $routeParams, $location, User, Tournament) {
		$logger.debug("Creating a new TournamentsController");

		$scope.user = User;

		/**
		 * Create a tournament
		 */
		$scope.create = function() {
			// Create the tournament to be send to the server
			var tournament = new Tournament({
				name: this.tournament.name, //this will be from the form
				tracks: 4
			});

			// Save it on the server and redirect to it
			tournament.$save(function(response) {
				$location.path("tournament/" + response._id);
			});

			// resets the value
			this.tournament.name = "";
		};

		/**
		 * Get all tournaments
		 * @param query a query to filter the tournaments
		 */
		$scope.all = function(query) {
			// We use the ngResource api
			Tournament.query(query, function(tournaments) {
				$scope.tournaments = tournaments;
			});
		};
	};
});
