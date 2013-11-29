/**
 * Created by eliorb on 25/11/13.
 */
/* global define */
define([], function() {
    "use strict";
    return function($scope, $logger, $routeParams, $location, User, Tournament) {

        $logger.debug("Getting tournament %s", $routeParams.id);

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
            if (!$scope.tournament) {
                $logger.warn("There is no tournament defined yet");
                return;
            }

            var tournament = $scope.tournament;
            $logger.debug('Updating tournament %s', tournament.tournamentId);

            tournament.$update(function() {
                $location.path('tournament/' + tournament.tournamentId);
            });
        };

        /**
         * Delete current tournament
         */
        $scope.remove = function() {
            if (!$scope.tournament) {
                $logger.warn("There is no tournament defined yet");
                return;
            }

            var tournament = $scope.tournament;
            $logger.debug('Deleting tournament %s', tournament.tournamentId);

            tournament.$remove();
            // Remove from the tournament list
            _.remove($scope.tournaments, {'tournamentId': tournament.tournamentId});
        };
    };
});
