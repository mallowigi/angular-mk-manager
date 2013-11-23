define(['angular'], function(angular) {
	"use strict";

	return angular.module('User', [])
		.factory('User', ['$window', '$logger', function UserService ($window, $logger) {
			$logger.debug('Creating a new User');

			return {
				/**
				 * Gets the current username, or null if the user is not connected
				 * @returns {String|undefined} the username or null otherwise
				 */
				getUser: function() {
					return $window.user || null;
				},
				/**
				 * Checks whether the user is authenticated
				 * @returns {boolean} true if authenticated
				 */
				isAuthenticated: function() {
					return !!$window.user || false;
				}
			};
		}])
		;
});
