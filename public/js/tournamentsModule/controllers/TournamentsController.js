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
            $logger.debug("Creating tournament %s", $scope.tournament.name);
            // Create the tournament to be send to the server
            var tournament = new Tournament({
                name: this.tournament.name, //this will be from the form
                tracks: 4
            });

            // Save it on the server and redirect to it
            tournament.$save(function(response) {
                $logger.debug("Receiving id %o from server", response);
                $location.path("tournament/" + response._id);
            }, function(error) {
                if (error.status === 401 && error.data) {
                    $logger.debug("Error: %o", error.data);
                    $scope.error = error.data.message;
                    if (error.data.redirect) {
                        window.location = error.data.redirect;
                    }
                }
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
