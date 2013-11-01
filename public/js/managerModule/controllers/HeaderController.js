define([], function() {
	"use strict";

	return function HeaderCtrl($scope, $location, $logger, User) {
		$logger.debug('Loading HeaderCtrl...');
		$scope.user = User.getUser();
		$scope.isAuth = User.isAuthenticated();
	};

});