/**
 * Created by eliorb on 25/11/13.
 */
/* global define */
define(['lodash'], function(_) {
    "use strict";
    return function($scope, $logger, $routeParams, $location, User, Tournament) {

        /**
         * Create a tournament
         */
        $scope.create = function() {
            var tournament;

            $logger.debug("Creating tournament %s", $scope.tournament.name);
            // Create the tournament to be send to the server
            tournament = new Tournament({
                name: this.tournament.name,
                tracks: 4
            });

            // Save it on the server and redirect to it
            tournament.$save(function(response) {
                $logger.debug("Receiving id %o from server", response);
                $location.path("tournaments/" + response._id);
            }, function(error) {
                $logger.debug("Error: %o", error.data);
                $scope.error = error.data.message;

                // Redirect to authentication page
                if (error.status === 401 && error.data) {
                    if (error.data.redirect) {
                        window.location = error.data.redirect;
                    }
                }
            });

            // resets the value
            //            this.tournament.name = "";
        };


        /**
         * Get the tournament referenced in the routeparams
         */
        $scope.get = function() {
            var tournamentId = $routeParams.id;
            if (!tournamentId) {
                $scope.error = 'You didn\'t specify the tournamentId';
                return;
            }

            $logger.debug("Getting tournament with given id: %s", tournamentId);
            // Fetch the tournament with the given id
            Tournament.get({tournamentId: tournamentId},
                function(response) {
                    $logger.info('Successfully retrieved tournament from the server: %o', response);
                    $scope.tournament = response;
                }, function() {
                    $scope.error = "Cannot find the requested tournament";
                }
            );
        };

        /**
         * Update current tournament
         */
        $scope.update = function() {
            var tournament;
            if (!$scope.tournament) {
                $logger.warn("There is no tournament defined yet");
                return;
            }

            tournament = $scope.tournament;
            $logger.debug('Updating tournament %s', tournament._id);

            tournament.$update(function() {
                $location.path('tournaments/');
            });
        };

        /**
         * Delete current tournament
         */
        $scope.remove = function() {
            var tournament;
            if (!$scope.tournament) {
                $logger.warn("There is no tournament defined yet");
                return;
            }

            tournament = $scope.tournament;
            $logger.debug('Deleting tournament %s', tournament._id);

            tournament.$remove();
            // Remove from the tournament list
            _.remove($scope.tournaments, {'_id': tournament._id});
        };
    };
});
