define(['angular'], function(angular) {
	"use strict";

	console.log('Loading HeaderCtrl...');

	return function HeaderCtrl($scope, $location, User) {
		$scope.user = User.getUser();
		$scope.isAuth = User.isAuthenticated();
	};

});