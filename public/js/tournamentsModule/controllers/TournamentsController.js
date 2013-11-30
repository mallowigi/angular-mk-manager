/* global define */
define([
], function() {
    "use strict";
    return function TournamentsController ($scope, $logger, $routeParams, $location, User, Tournament) {
        $logger.debug("Loading TournamentsController");

        $scope.user = User;


        /**
         * Get all tournaments
         * @param query optional query parameters
         */
        $scope.all = function(query) {
            // We use the ngResource api
            Tournament.query(query, function(tournaments) {
                $scope.tournaments = tournaments;
            }, function(error) {
                $logger.error(error);
                $scope.error = error;
            });
        };

        // NG INIT
        $logger.debug("Getting all registered tournaments");
        $scope.all();
    };
});
