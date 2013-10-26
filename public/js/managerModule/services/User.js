define(['angular'], function(angular) {
	"use strict";
	console.log('Loading Manager User Service');
	return function UserService($window) {
		"use strict";
		console.log('Loading User Service...');
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
	};
});
